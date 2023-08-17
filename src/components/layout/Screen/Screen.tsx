import { PropsWithChildren } from "react";
import * as S from "./styles";

export const Screen = ({ children }: PropsWithChildren) => (
    <S.Container>{children}</S.Container>
);
