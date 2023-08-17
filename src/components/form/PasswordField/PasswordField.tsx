import { useState } from "react";
import { PasswordFieldProps } from "./types";
import * as S from "./styles";

export const PasswordField = ({
    label,
    name,
    ...props
}: PasswordFieldProps) => {
    const [value, setValue] = useState<string>();

    return (
        <S.Container>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.Input {...{ ...props, name }} />
        </S.Container>
    );
};
