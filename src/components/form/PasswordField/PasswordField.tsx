import { ChangeEvent, useCallback } from "react";
import { PasswordFieldProps } from "./types";
import * as S from "./styles";

export const PasswordField = ({
    label,
    name,
    onChange,
    ...props
}: PasswordFieldProps) => {
    const handleChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => onChange(target.value),
        [onChange]
    );

    return (
        <S.Container>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.Input
                {...{ ...props, name, type: "password" }}
                onChange={handleChange}
            />
        </S.Container>
    );
};
