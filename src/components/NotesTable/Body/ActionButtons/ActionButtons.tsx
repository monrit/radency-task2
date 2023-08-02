import { IconButton, TableCell } from "@mui/material";
import { FC } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useAppDispatch } from "../../../../hooks/redux";
import { notesSliceActions } from "../../../../redux/reducers/notesSlice";
import { modalSliceActions } from "../../../../redux/reducers/modalSlice";
import { NoteType } from "../../../../types/types";

type ActionButtonsProps = Omit<NoteType, "dates" | "created">

const ActionsButtons: FC<ActionButtonsProps> = ({ isArchived, id, name, category, content }) => {
    const dispatch = useAppDispatch();
    const { deleteNote, archiveNote } = notesSliceActions;
    const { openModalWithInfo } = modalSliceActions;

    return (
        <TableCell sx={{ maxWidth: 100 }}>
            <IconButton
                onClick={() => dispatch(openModalWithInfo({ id, name, category, content }))}
            >
                <ModeEditIcon />
            </IconButton>
            <IconButton onClick={() => dispatch(archiveNote(id))}>
                {isArchived ? <UnarchiveIcon /> : <ArchiveIcon />}
            </IconButton>
            <IconButton onClick={() => dispatch(deleteNote(id))}>
                <DeleteIcon />
            </IconButton>
        </TableCell>
    );
};

export default ActionsButtons;
