import { Meta, StoryObj } from "@storybook/react";
import NotesTable from "../../components/NotesTable/NotesTable";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

/** The NotesTable component displays a table of notes. */
const meta: Meta<typeof NotesTable> = {
    component: NotesTable,
    title: "NotesApp/NotesTable",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    argTypes: {
        archive: {
            control: "boolean",
            description: "Changes the view of a table to look through archived/unarchived notes.",
            defaultValue: { summary: false },
            table: {
                type: { summary: "boolean" },
            },
        },
    },
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the default version of the NotesTable, displaying only unarchived notes. */
export const Base: StoryType = {
    args: {
        archive: false,
    },
};

/** The 'Archive' story represents a version of the NotesTable that displays only archived notes. */
export const Archive: StoryType = {
    args: {
        archive: true,
    },
};

export default meta;
