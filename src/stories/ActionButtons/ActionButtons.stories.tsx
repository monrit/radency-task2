import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ActionsButtons from "../../components/NotesTable/Body/ActionButtons/ActionButtons";

/** The ActionsButtons component displays a group of action buttons. */
const meta: Meta<typeof ActionsButtons> = {
    component: ActionsButtons,
    title: "NotesApp/ActionsButtons",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    argTypes: {
        isArchived: {
            control: "boolean",
            description: "*REQUIRED* Changes an icon inside the button.",
            table: {
                type: { summary: "boolean" },
            },
            //IT DOES NOT WORK! STORYBOOK CANT READ TYPE OF ACTIONBUTTONS SO I HAD TO CONFIGURE TABLE BY HAND 
            required: true, //THAT IS NOT HARD OR SMT, IT JUST DOES'NT HAVE FIELD TO MARK PROP AS REQUIRED, HE CAN ONLY DO IT AUTOMATICALLY!
        },
        id: {
            control: "number",
            description: "*REQUIRED* id of a note you want to edit/archive/delete (used for modal form for editind) **Does not have effect on a buttons**",
            table: {
                type: { summary: "number" },
            },
        },
        name: {
            control: { type: "text" },
            description:
                "*REQUIRED* name of a note you want to edit/archive/delete (used for modal form for editind) **Does not have effect on a buttons**",
            table: {
                type: { summary: "string", required: true },
            },
        },
        category: {
            control: { type: "select" },
            options: ["Idea", "Random Thought", "Task"],
            description:
                "*REQUIRED* category of a note you want to edit/archive/delete (used for modal form for editind) **Does not have effect on a buttons**",
            table: {
                type: { summary: `"Idea" | "Random Thought" | "Task"` },
            },
        },
        content: {
            control: { type: "text" },
            description:
                "*REQUIRED* content of a note you want to edit/archive/delete (used for modal form for editind) **Does not have effect on a buttons**",
            table: {
                type: { summary: "string" },
            },
        },
    },
    args: {
        isArchived: false,
        id: 1,
        name: "Nice note",
        category: "Idea",
        content: "Nice content",
    },
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the default version of the ActionsButtons, displaying archive icon. */
export const Base: StoryType = {
    args: {
        isArchived: false,
    },
};

/** The 'Archive' story represents a version of the ActionsButtons that displays unarchive icon. */
export const Archive: StoryType = {
    args: {
        isArchived: true,
    },
};

export default meta;
