import { FC } from "react";
import NotesTable from "../NotesTable/NotesTable";
import { Button } from "@mui/material";
import StatsTable from "../StatsTable/StatsTable";
import { useNavigate } from "react-router-dom";

type MainPagePropsType = {
    archive?: boolean;
};

const MainPage: FC<MainPagePropsType> = ({ archive }) => {
    const navigate = useNavigate();

    return (
        <>
            <NotesTable archive={archive} />
            <Button>Add note</Button>
            <Button onClick={() => navigate(archive ? "/" : "/archive")}>Archive</Button>
            <StatsTable />
        </>
    );
};

export default MainPage;
