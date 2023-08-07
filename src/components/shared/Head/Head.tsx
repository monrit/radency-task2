import { FC } from "react";
import { HeaderType } from "../../../types/types";

type HeadPropsType = {
    columns: Array<HeaderType>;
};

const Head: FC<HeadPropsType> = ({ columns }) => {
    return (
        <thead className="border-b-black border-b-2">
            <tr>
                {columns.map(column => (
                    <th key={column.label} className={column.class + " text-start"}>
                        {column.label}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default Head;
