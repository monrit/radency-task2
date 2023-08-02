import { Box, Button, Dialog, DialogContent, MenuItem, TextField, Typography } from "@mui/material";
import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { modalSliceActions } from "../../redux/reducers/modalSlice";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormInputsType } from "../../types/types";
import { formValidation } from "./validation";
import { SELECT_OPTIONS } from "../../constants/constants";
import { notesSliceActions } from "../../redux/reducers/notesSlice";

const ModalForm: FC = () => {
    const open = useAppSelector(store => store.modalReducer.open);
    const fieldValues = useAppSelector(store => store.modalReducer.fields);
    const dispatch = useAppDispatch();
    const { closeModal } = modalSliceActions;
    const { addNote, editNote } = notesSliceActions;

    const {
        formState: { errors },
        handleSubmit,
        setValue,
        register,
        control,
        reset,
    } = useForm<FormInputsType>({
        mode: "onSubmit",
    });

    const onClose = (): void => {
        dispatch(closeModal());
    };

    const onSubmit: SubmitHandler<FormInputsType> = data => {
        if (fieldValues) {
            dispatch(
                editNote({
                    ...data,
                    id: fieldValues.id,
                })
            );
        } else {
            dispatch(addNote(data));
        }
        onClose();
    };

    useEffect(() => {
        if (open) {
            reset();
        }
    }, [open, reset]);

    useEffect(() => {
        if (fieldValues) {
            setValue("name", fieldValues.name);
            setValue("category", fieldValues.category);
            setValue("content", fieldValues.content);
        } else {
            setValue("category", "Task");
        }
    }, [fieldValues, setValue]);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent sx={{ width: "420px" }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            alignItems: "center",
                        }}
                    >
                        <Typography>Write your pretty, little note &#10084;</Typography>
                        <TextField
                            sx={{ width: "100%" }}
                            label="Name"
                            {...register("name", formValidation.name)}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                        />
                        <Controller
                            name="category"
                            control={control}
                            defaultValue="Task"
                            render={({ field }) => (
                                <TextField
                                    sx={{ width: "100%" }}
                                    {...field}
                                    select
                                    label="Category"
                                >
                                    {SELECT_OPTIONS.map(option => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        <TextField
                            label="Content"
                            multiline
                            rows={4}
                            sx={{ width: "100%" }}
                            {...register("content", formValidation.content)}
                            error={Boolean(errors.content)}
                            helperText={errors.content?.message}
                        />
                        <Button sx={{ width: "80%" }} type="submit" variant="contained">
                            {fieldValues ? "Save" : "Add note"}
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ModalForm;
