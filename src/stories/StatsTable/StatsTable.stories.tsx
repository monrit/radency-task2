import { Meta, StoryObj } from "@storybook/react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import StatsTable from "../../components/StatsTable/StatsTable";

/** The StatsTable component displays a table of statistics. */
const meta: Meta<typeof StatsTable> = {
    component: StatsTable,
    title: "NotesApp/StatsTable",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the default version of the StatsTable, displaying NotesTable statistics. */
export const Base: StoryType = {};

export default meta;
