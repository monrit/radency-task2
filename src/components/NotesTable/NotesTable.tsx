import { FC } from "react";
import Head from "../shared/Head/Head";
import { NOTES_HEADERS, NOTES_PROPERTIES } from "../../constants/constants";
import { useAppSelector } from "../../hooks/redux";
import Body from "./Body/Body";

type NotesTablePropsType = {
    archive?: boolean;
};

const NotesTable: FC<NotesTablePropsType> = ({ archive }) => {
    const notes = useAppSelector(store => store.notesReducer.notes);

    return (
        <div className="overflow-auto h-[550px] sm:h-auto">
            <table className="table-fixed min-w-max w-full">
                <Head columns={NOTES_HEADERS} />
                <Body
                    columns={NOTES_PROPERTIES}
                    rows={notes.filter(note => note.isArchived === Boolean(archive))}
                />
            </table>
        </div>
    );
};

export default NotesTable;
