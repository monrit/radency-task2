import { TableBody, TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import { AllowedNoteKeysType, NoteType } from "../../../types/types";
import ActionsButtons from "./ActionButtons/ActionButtons";
import { getNiceDate } from "../../../utils/getNiceDate";

type BodyPropsType = {
    rows: Array<NoteType>;
    columns: Array<AllowedNoteKeysType>;
    withActions?: boolean;
};

const conditionalValue = (column: AllowedNoteKeysType, row: NoteType): string => {
    switch (column) {
        case "created":
            return getNiceDate(row[column]);
        case "dates":
            return row[column].join(", ");
        default:
            return row[column];
    }
};

const Body: FC<BodyPropsType> = ({ rows, columns, withActions }) => {
    return (
        <TableBody>
            {rows.map(row => {
                return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                        {columns.map(column => {
                            return (
                                <TableCell key={column + row.id} sx={{ padding: "10px" }}>
                                    {conditionalValue(column, row)}
                                </TableCell>
                            );
                        })}
                        {withActions ? (
                            <ActionsButtons isArchived={row.isArchived} id={row.id} />
                        ) : null}
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default Body;
