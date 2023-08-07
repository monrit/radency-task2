import { FC } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useAppDispatch } from "../../../../hooks/redux";
import { notesSliceActions } from "../../../../redux/reducers/notesSlice";
import { modalSliceActions } from "../../../../redux/reducers/modalSlice";
import { NoteType } from "../../../../types/types";

type ActionButtonsProps = Omit<NoteType, "dates" | "created">;

const buttonClass = "text-gray-700 hover:text-gray-600 active:text-gray-800 hover:-translate-y-0.5 transform transition rounded-md";

const ActionsButtons: FC<ActionButtonsProps> = ({ isArchived, id, name, category, content }) => {
    const dispatch = useAppDispatch();
    const { deleteNote, archiveNote } = notesSliceActions;
    const { openModalWithInfo } = modalSliceActions;

    return (
        <td>
            <div className="flex gap-2 justify-center items-center h-full">
                <button
                    onClick={() => dispatch(openModalWithInfo({ id, name, category, content }))}
                    className={buttonClass}
                >
                    <ModeEditIcon />
                </button>
                <button onClick={() => dispatch(archiveNote(id))} className={buttonClass}>
                    {isArchived ? <UnarchiveIcon /> : <ArchiveIcon />}
                </button>
                <button onClick={() => dispatch(deleteNote(id))} className={buttonClass}>
                    <DeleteIcon />
                </button>
            </div>
        </td>
    );
};

export default ActionsButtons;
