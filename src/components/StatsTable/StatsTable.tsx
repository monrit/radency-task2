import { Table, TableContainer } from "@mui/material";
import { STATS_HEADERS } from "../../constants/constants";
import Head from "../shared/Head/Head";

const StatsTable = () => {
    return (
        <>
            <TableContainer>
                <Table stickyHeader>
                    <Head columns={STATS_HEADERS} />
                </Table>
            </TableContainer>
        </>
    );
};

export default StatsTable;
