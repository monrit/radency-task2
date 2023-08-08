import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import Head from "../../components/shared/Head/Head";
import { NOTES_HEADERS, STATS_HEADERS } from "../../constants/constants";

/** The Head component displays a head of tables. */
const meta: Meta<typeof Head> = {
    component: Head,
    title: "NotesApp/Head",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <table className="table-auto w-full">
                <Story />
            </table>
        ),
    ],
    argTypes: {
        columns: {
            description: "Array of headers with tailwind class names for styles"
        }
    },
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the head of a table. */
export const Base: StoryType = {
    args: {
        columns: NOTES_HEADERS,
    },
};

/** The 'Alternative' story represents the head of an alternative table */
export const Alternative: StoryType = {
    args: {
        columns: STATS_HEADERS,
    },
};

export default meta;
