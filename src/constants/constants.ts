import { AllowedNoteKeysType, HeaderType, NoteType } from "../types/types";

export const NOTES_HEADERS: Array<HeaderType> = [
    { label: "Name", class: "w-[180px] sm:w-1/6" },
    { label: "Created", class: "w-[100px] sm:w-1/12" },
    { label: "Category", class: "w-[150px] sm:w-1/10" },
    { label: "Content", class: "w-[280px] sm:w-1/3" },
    { label: "Dates", class: "w-[180px] sm:w-1/6" },
    { label: "Actions", class: "w-[100px] sm:w-1/12" },
];
export const NOTES_PROPERTIES: Array<AllowedNoteKeysType> = [
    "name",
    "created",
    "category",
    "content",
    "dates",
];

export const STATS_HEADERS: Array<HeaderType> = [
    { label: "Note category", class: "w-1/2" },
    { label: "Active", class: "w-1/4" },
    { label: "Archived", class: "w-1/4" },
];

export const SELECT_OPTIONS: Array<"Idea" | "Task" | "Random Thought"> = [
    "Idea",
    "Random Thought",
    "Task",
];

export const CATEGORIES: Array<NoteType["category"]> = ["Task", "Random Thought", "Idea"];
