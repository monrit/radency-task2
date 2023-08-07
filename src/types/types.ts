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

export type FormFieldType = "name" | "category" | "content";

export type FormFieldsType = {
    label: string;
    field: FormFieldType;
};

export type FormInputsType = Pick<NoteType, "name" | "category" | "content">;

export type HeaderType = {
    label: string;
    class: string;
};
