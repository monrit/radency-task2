import { FC } from "react";
import NotesTable from "../NotesTable/NotesTable";
import { Button } from "@mui/material";
import StatsTable from "../StatsTable/StatsTable";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { modalSliceActions } from "../../redux/reducers/modalSlice";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type MainPagePropsType = {
    archive?: boolean;
};

const theme = createTheme({
    palette: {
        info: {
            main: "#616161",
            light: "#8e8e8e",
            dark: "#373737",
            contrastText: "#ffffff",
        },
    },
});

const MainPage: FC<MainPagePropsType> = ({ archive }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { openModal } = modalSliceActions;

    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="end" gap="6px">
                <NotesTable archive={archive} />
                <Box display="flex" gap="8px">
                    <Button variant="contained" onClick={() => dispatch(openModal())}>
                        Add note
                    </Button>
                    <ThemeProvider theme={theme}>
                        <Button
                            variant={archive ? "contained" : "outlined"}
                            color="info"
                            onClick={() => navigate(archive ? "/" : "/archive")}
                        >
                            Archive
                        </Button>
                    </ThemeProvider>
                </Box>
            </Box>
            <StatsTable />
        </>
    );
};

export default MainPage;
