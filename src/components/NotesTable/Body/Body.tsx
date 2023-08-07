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
        <tbody>
            {rows.map(row => {
                return (
                    <tr key={row.id} className="border-b border-b-gray-300 hover:bg-gray-100">
                        {columns.map(column => {
                            const value = conditionalValue(column, row);
                            return (
                                <td
                                    key={column + row.id}
                                    title={value}
                                    className="py-2"
                                >
                                    {value}
                                </td>
                            );
                        })}
                        <ActionsButtons
                            isArchived={row.isArchived}
                            id={row.id}
                            name={row.name}
                            category={row.category}
                            content={row.content}
                        />
                    </tr>
                );
            })}
        </tbody>
    );
};

export default Body;
