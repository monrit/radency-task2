import { FC } from "react";
import { countByCategory } from "../../../utils/countByCategory";
import { useAppSelector } from "../../../hooks/redux";
import { NoteType } from "../../../types/types";

type StatsBodyPropsType = {
    categories: NoteType["category"][];
};

const StatsBody: FC<StatsBodyPropsType> = ({ categories }) => {
    const notes = useAppSelector(store => store.notesReducer.notes);

    return (
        <tbody>
            {categories.map(category => {
                return (
                    <tr key={category} className="border-b border-b-gray-300 hover:bg-gray-100">
                        {[0, 1, 2].map(row => {
                            return (
                                <td key={category + row} className="py-2">
                                    {row === 0
                                        ? category
                                        : row === 1
                                        ? countByCategory(notes, category, false)
                                        : countByCategory(notes, category, true)}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

export default StatsBody;
