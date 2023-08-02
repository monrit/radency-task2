import { TableBody, TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import { AllowedNoteKeysType, NoteType } from "../../../types/types";
import ActionsButtons from "./ActionButtons/ActionButtons";
import { getNiceDate } from "../../../utils/getNiceDate";

type BodyPropsType = {
    rows: Array<NoteType>;
    columns: Array<AllowedNoteKeysType>;
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

const Body: FC<BodyPropsType> = ({ rows, columns }) => {
    return (
        <TableBody>
            {rows.map(row => {
                return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                        {columns.map(column => {
                            const value = conditionalValue(column, row);
                            return (
                                <TableCell
                                    key={column + row.id}
                                    sx={{
                                        padding: "10px",
                                        maxWidth: 200,
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                    }}
                                    title={value}
                                >
                                    {value}
                                </TableCell>
                            );
                        })}
                        <ActionsButtons
                            isArchived={row.isArchived}
                            id={row.id}
                            name={row.name}
                            category={row.category}
                            content={row.content}
                        />
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default Body;
