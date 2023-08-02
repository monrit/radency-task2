import { Table, TableContainer } from "@mui/material";
import { CATEGORIES, STATS_HEADERS } from "../../constants/constants";
import Head from "../shared/Head/Head";
import StatsBody from "./StatsBody/StatsBody";

const StatsTable = () => {
    return (
        <>
            <TableContainer>
                <Table stickyHeader>
                    <Head columns={STATS_HEADERS} />
                    <StatsBody categories={CATEGORIES} />
                </Table>
            </TableContainer>
        </>
    );
};

export default StatsTable;
