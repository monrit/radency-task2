import { Meta, StoryObj } from "@storybook/react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import StatsBody from "../../components/StatsTable/StatsBody/StatsBody";
import { CATEGORIES } from "../../constants/constants";

/** The StatsBody component displays a body of StatsTable of statistics. */
const meta: Meta<typeof StatsBody> = {
    component: StatsBody,
    title: "NotesApp/StatsBody",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <Provider store={store}>
                <table className="table-auto w-full">
                    <Story />
                </table>
            </Provider>
        ),
    ],
    argTypes: {
        categories: {
            description: "Array of categories to display",
        },
    },
    args: {
        categories: CATEGORIES,
    },
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the default version of the StatsBody, displaying NotesTable statistics. */
export const Base: StoryType = {};

export default meta;
