import { RegisterOptions } from "react-hook-form";
import { FormFieldType } from "../../types/types";

type FormValidationType = Record<FormFieldType, RegisterOptions>;

export const formValidation: FormValidationType = {
    name: {
        required: "Name is required",
        minLength: {
            value: 2,
            message: "Too short name"
        }
    },
    category: {
        required: true,
    },
    content: {
        required: "Content field is required",
        minLength: {
            value: 2,
            message: "Too short content"
        }
    }
};