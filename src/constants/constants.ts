import { AllowedNoteKeysType, NoteType } from "../types/types";

export const NOTES_HEADERS = ["Name", "Created", "Category", "Content", "Dates", "Actions"];
export const NOTES_PROPERTIES: Array<AllowedNoteKeysType> = [
    "name",
    "created",
    "category",
    "content",
    "dates",
];

export const STATS_HEADERS = ["Note category", "Active", "Archived"];

export const SELECT_OPTIONS: Array<"Idea" | "Task" | "Random Thought"> = [
    "Idea",
    "Random Thought",
    "Task",
];

export const CATEGORIES: Array<NoteType["category"]> = ["Task", "Random Thought", "Idea"];
