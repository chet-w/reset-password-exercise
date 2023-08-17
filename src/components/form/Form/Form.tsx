import { PropsWithChildren } from "react";
import * as S from "./styles";

export const Form = ({ children }: PropsWithChildren) => (
    <S.Form onSubmit={(event) => event.preventDefault()}>{children}</S.Form>
);
