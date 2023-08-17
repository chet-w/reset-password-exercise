import { ChangeEvent, useCallback, useState } from "react";
import { PasswordFieldProps } from "./types";
import * as S from "./styles";

export const PasswordField = ({
    label,
    name,
    onChange,
    ...props
}: PasswordFieldProps) => {
    const [isMasked, setIsMasked] = useState(false);
    const handleChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => onChange(target.value),
        [onChange]
    );

    return (
        <S.Container>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.Row>
                <S.Input
                    {...{
                        ...props,
                        name,
                        type: isMasked ? "password" : "text",
                    }}
                    onChange={handleChange}
                />
                <S.Toggle onClick={() => setIsMasked(!isMasked)}>
                    {isMasked ? "👁️" : "🙈"}
                </S.Toggle>
            </S.Row>
        </S.Container>
    );
};
