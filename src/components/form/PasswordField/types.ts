import { HTMLProps } from "react";

export type PasswordFieldProps = Omit<
    HTMLProps<HTMLInputElement>,
    "onChange"
> & {
    label: string;
    onChange: (value: string) => void;
};
