import { CATEGORIES, STATS_HEADERS } from "../../constants/constants";
import Head from "../shared/Head/Head";
import StatsBody from "./StatsBody/StatsBody";

const StatsTable = () => {
    return (
        <>
            <div>
                <table className="table-auto w-full">
                    <Head columns={STATS_HEADERS} />
                    <StatsBody categories={CATEGORIES} />
                </table>
            </div>
        </>
    );
};

export default StatsTable;
