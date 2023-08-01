export type NoteType = {
    id: number;
    name: string;
    created: number;
    category: "Task" | "Random Thought" | "Idea";
    content: string;
    dates: string[];
    isArchived: boolean;
};

export type AllowedNoteKeysType = keyof Omit<NoteType, "id" | "isArchived">;
