import { FC } from "react";
import NotesTable from "../NotesTable/NotesTable";
import StatsTable from "../StatsTable/StatsTable";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { modalSliceActions } from "../../redux/reducers/modalSlice";

type MainPagePropsType = {
    archive?: boolean;
};

const MainPage: FC<MainPagePropsType> = ({ archive }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { openModal } = modalSliceActions;

    return (
        <div className="p-2 flex flex-col">
            <NotesTable archive={archive} />
            <div className="flex mx-auto sm:ml-auto sm:mx-0 gap-2 my-2 w-full sm:w-auto">
                <button
                    onClick={() => dispatch(openModal())}
                    className="bg-indigo-500 active:bg-indigo-600 hover:bg-indigo-400 hover:-translate-y-0.5 transform transition w-full sm:w-auto sm:px-5 py-2 rounded-lg text-white shadow-md border-2 border-transparent box-border"
                >
                    Add note
                </button>
                <button
                    onClick={() => navigate(archive ? "/" : "/archive")}
                    className={`${
                        archive
                            ? "bg-gray-500 hover:bg-white text-white hover:text-black"
                            : "bg-white hover:bg-gray-500 hover:text-white"
                    } active:bg-gray-600  hover:-translate-y-0.5 transform transition w-full sm:w-auto sm:px-5 py-2 rounded-lg  shadow-md border-2 border-gray-600 box-border`}
                >
                    Archive
                </button>
            </div>
            <StatsTable />
        </div>
    );
};

export default MainPage;
