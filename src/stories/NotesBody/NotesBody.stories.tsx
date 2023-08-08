import { Meta, StoryObj } from "@storybook/react";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import Body from "../../components/NotesTable/Body/Body";
import { NOTES_PROPERTIES } from "../../constants/constants";

/** The Body component displays a body of NotesTable. */
const meta: Meta<typeof Body> = {
    component: Body,
    title: "NotesApp/NotesBody",
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
        columns: {
            description: "Properties which correspond with some note object properties"
        },
        rows: {
            description: "Array of notes filtered by isArchived"
        }
    },
    args: {
        columns: NOTES_PROPERTIES,
        rows: store.getState().notesReducer.notes.filter(note => note.isArchived === false),
    },
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the default version of the NotesBody, displaying NotesTable body with unarchived notes. */
export const Base: StoryType = {};

/** The 'Archive' story represents the archive version of the NotesBody, displaying NotesTable body with archived notes. */
export const Archive: StoryType = {
    args: {
        rows: store
            .getState()
            .notesReducer.notes.map(note => ({ ...note, isArchived: true }))
            .filter(note => note.isArchived === true),
    },
};

export default meta;
