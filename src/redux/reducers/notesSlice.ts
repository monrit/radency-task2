import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NoteType } from "../../types/types";
import { parseDates } from "../../utils/parseDates";

type NotesStateType = {
    notes: Array<NoteType>;
};

const initialState: NotesStateType = {
    notes: [
        {
            id: 0,
            name: "Make beautiful sites",
            created: 1630890235946,
            category: "Task",
            content: "Notes app",
            dates: [],
            isArchived: false,
        },
        {
            id: 1,
            name: "Ineternet",
            created: 1640890235946,
            category: "Task",
            content: "Top up your balance",
            dates: [],
            isArchived: false,
        },
        {
            id: 2,
            name: "Go for a walk",
            created: 1650890235946,
            category: "Task",
            content: "There is some nice forest near the your town",
            dates: [],
            isArchived: false,
        },
        {
            id: 3,
            name: "Buy a second monitor",
            created: 1660890235946,
            category: "Task",
            content: "IPS 1080p 350 nits 24 inches",
            dates: [],
            isArchived: false,
        },
        {
            id: 4,
            name: "I had worked on a team project",
            created: 1670890235946,
            category: "Random Thought",
            content: "It started 13/02/2022 and ended somewheare near 20/05/2023",
            dates: ["13/02/2022", "20/05/2023"],
            isArchived: false,
        },
        {
            id: 5,
            name: "Test task deadline",
            created: 1680890235946,
            category: "Random Thought",
            content: "07/08/2023",
            dates: ["07/08/2023"],
            isArchived: false,
        },
        {
            id: 6,
            name: "Wash car with body shampoo",
            created: 1690890235946,
            category: "Idea",
            content: "Could be the nicest idea ever! Or be the worst one...",
            dates: [],
            isArchived: false,
        },
    ],
};

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote(state, action: PayloadAction<Pick<NoteType, "name" | "category" | "content">>) {
            state.notes.push({
                ...action.payload,
                id: state.notes[state.notes.length - 1].id + 1,
                created: Date.now(),
                isArchived: false,
                dates: parseDates(action.payload.content),
            });
        },
        deleteNote(state, action: PayloadAction<number>) {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        editNote(
            state,
            action: PayloadAction<Pick<NoteType, "id" | "name" | "category" | "content">>
        ) {
            for (let note of state.notes) {
                if (note.id === action.payload.id) {
                    note.name = action.payload.name;
                    note.category = action.payload.category;
                    note.content = action.payload.content;
                    note.dates = parseDates(action.payload.content);
                    break;
                }
            }
        },
        archiveNote(state, action: PayloadAction<number>) {
            for (let note of state.notes) {
                if (note.id === action.payload) {
                    note.isArchived = !note.isArchived;
                    break;
                }
            }
        },
    },
});

export const notesSliceActions = notesSlice.actions;

export default notesSlice.reducer;
