import { useMemo } from "react";
import { ButtonProps } from "./types";
import * as S from "./styles";

const BUTTON_TYPES = {
    primary: S.Primary,
    secondary: S.Secondary,
} as const;

export const Button = ({ type, children }: ButtonProps) => {
    const Component = useMemo(() => BUTTON_TYPES[type], [type]);

    return <Component>{children}</Component>;
};
