import { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Form from "../../components/ModalForm/Form/Form";
import { action } from "@storybook/addon-actions";

/** The Form component displays an adding note form. */
const meta: Meta<typeof Form> = {
    component: Form,
    title: "NotesApp/Form",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    argTypes: {
        open: {
            control: "boolean",
            description: "Trigger for form clearance (on true)",
        },
        onClose: {
            action: "onClose",
            description: "Function that closes parent modal element to hide form",
        },
        fieldValues: {
            control: { type: "object" },
            defaultValue: { id: 0, name: "", category: "Idea", content: "" },
            description: "Field values that changes form state",
        },
    },
    args: {
        fieldValues: {
            id: 1,
            name: "",
            category: "Task",
            content: "",
        },
    },
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the default version of empty Form to fullfill. */
export const Base: StoryType = {
    args: {
        onClose: action("onClose"),
    },
};

/** The 'EditMode' story represents a version of the Form that has some data to change. */
export const EditMode: StoryType = {
    args: {
        onClose: action("onClose"),
        fieldValues: {
            id: 1,
            name: "Nice note name",
            category: "Random Thought",
            content: "Nicest note content",
        },
    },
};

export default meta;
