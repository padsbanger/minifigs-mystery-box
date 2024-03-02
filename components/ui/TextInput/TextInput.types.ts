import { InputHTMLAttributes, ReactNode } from "react";
import { FieldError, FieldErrors, Merge } from "react-hook-form";

export type TextInputProps = {
  label?: string | ReactNode;
  errorMessage?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrors<any>>
    | undefined;
  disabled?: boolean;
};
