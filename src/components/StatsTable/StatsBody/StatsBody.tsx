import { FC } from "react";
import { TableBody, TableRow, TableCell } from "@mui/material";
import { countByCategory } from "../../../utils/countByCategory";
import { useAppSelector } from "../../../hooks/redux";
import { NoteType } from "../../../types/types";

type StatsBodyPropsType = {
    categories: NoteType["category"][];
};

const StatsBody: FC<StatsBodyPropsType> = ({ categories }) => {
    const notes = useAppSelector(store => store.notesReducer.notes);

    return (
        <TableBody>
            {categories.map(category => {
                return (
                    <TableRow hover tabIndex={-1} key={category}>
                        {[0, 1, 2].map(row => {
                            return (
                                <TableCell key={category + row} sx={{ padding: "10px" }}>
                                    {row === 0
                                        ? category
                                        : row === 1
                                        ? countByCategory(notes, category, false)
                                        : countByCategory(notes, category, true)}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>
    );
};

export default StatsBody;
