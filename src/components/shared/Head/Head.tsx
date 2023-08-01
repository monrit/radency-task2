import { TableCell, TableHead, TableRow } from "@mui/material";
import { FC } from "react";

type HeadPropsType = {
    columns: Array<string>;
};

const Head: FC<HeadPropsType> = ({ columns }) => {
    return (
        <TableHead>
            <TableRow>
                {columns.map(column => (
                    <TableCell key={column} sx={{ fontWeight: "bold" }}>
                        {column}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default Head;
