import { FC, useEffect } from "react";
import { formValidation } from "../validation";
import { SELECT_OPTIONS } from "../../../constants/constants";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { FormInputsType } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { notesSliceActions } from "../../../redux/reducers/notesSlice";

type FormPropsType = {
    open: boolean;
    onClose: () => void;
};

const Form: FC<FormPropsType> = ({ open, onClose }) => {
    const fieldValues = useAppSelector(store => store.modalReducer.fields);
    const dispatch = useAppDispatch();

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input
                        className="p-2 rounded border border-gray-500 shadow"
                        id="name"
                        type="text"
                        {...register("name", formValidation.name)}
                    />
                    {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                </div>
                <Controller
                    name="category"
                    control={control}
                    defaultValue="Task"
                    render={({ field }) => (
                        <div className="flex flex-col">
                            <label htmlFor="category">Category</label>
                            <select
                                {...field}
                                id="category"
                                className="p-2 rounded border border-gray-500 shadow"
                            >
                                {SELECT_OPTIONS.map(option => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                />
                <div className="flex flex-col">
                    <label htmlFor="content">Content</label>
                    <textarea
                        className="resize-none p-2 rounded border border-gray-500 shadow"
                        id="content"
                        rows={4}
                        {...register("content", formValidation.content)}
                    />
                    {errors.content && <p className="text-red-600">{errors.content.message}</p>}
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 active:bg-indigo-600 hover:bg-indigo-400 hover:-translate-y-0.5 transform transition px-5 py-2 mx-5 rounded-lg text-white shadow-md"
                >
                    {fieldValues ? "Save" : "Add note"}
                </button>
            </div>
        </form>
    );
};

export default Form;
