import { Meta, StoryObj } from "@storybook/react";
import MainPage from "../../components/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";

/** The MainPage component displays a general page layout. */
const meta: Meta<typeof MainPage> = {
    component: MainPage,
    title: "NotesApp/MainPage",
    tags: ["autodocs"],
    decorators: [
        Story => (
            <Provider store={store}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </Provider>
        ),
    ],
    argTypes: {
        archive: {
            description: "Archive/Main tables"
        }
    }
};

type StoryType = StoryObj<typeof meta>;

/** The 'Base' story represents the unarchived table page. */
export const Base: StoryType = {
    args: {
        archive: false
    },
};

/** The 'Base' story represents the archived table page. */
export const Archive: StoryType = {
    args: {
        archive: true
    },
};

export default meta;
