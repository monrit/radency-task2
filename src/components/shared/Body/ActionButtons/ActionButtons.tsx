import { IconButton, TableCell } from "@mui/material";
import { FC } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { useAppDispatch } from "../../../../hooks/redux";
import { notesSlice } from "../../../../redux/reducers/notesSlice";

type ActionButtonsProps = {
    isArchived: boolean;
    id: number;
};

const ActionsButtons: FC<ActionButtonsProps> = ({ isArchived, id }) => {

    const dispatch = useAppDispatch();
    const {deleteNote, archiveNote} = notesSlice.actions;

    return <TableCell>
        <IconButton>
            <ModeEditIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(archiveNote(id))}>
            {isArchived ? <UnarchiveIcon />: <ArchiveIcon />}
        </IconButton>
        <IconButton onClick={() => dispatch(deleteNote(id))}>
            <DeleteIcon />
        </IconButton>
    </TableCell>;
};

export default ActionsButtons;
