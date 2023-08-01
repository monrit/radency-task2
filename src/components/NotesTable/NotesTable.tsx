import { Table, TableContainer } from "@mui/material";
import { FC } from "react";
import Head from "../shared/Head/Head";
import Body from "../shared/Body/Body";
import { NOTES_HEADERS, NOTES_PROPERTIES } from "../../constants/constants";
import { useAppSelector } from "../../hooks/redux";

type NotesTablePropsType = {
    archive?: boolean;
};

const NotesTable: FC<NotesTablePropsType> = ({ archive }) => {
    const notes = useAppSelector(store => store.notesReducer.notes);

    return (
        <TableContainer>
            <Table stickyHeader>
                <Head columns={NOTES_HEADERS} />
                <Body
                    columns={NOTES_PROPERTIES}
                    rows={notes.filter(note => note.isArchived === Boolean(archive))}
                    withActions
                />
            </Table>
        </TableContainer>
    );
};

export default NotesTable;
