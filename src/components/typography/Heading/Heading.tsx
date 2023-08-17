import { HeadingProps } from "./types";
import * as S from "./styles";
import { useMemo } from "react";

const HEADING_TYPES = {
    page: S.PageHeading,
    section: S.SectionHeading,
} as const;

export const Heading = ({ type, children }: HeadingProps) => {
    const Component = useMemo(() => HEADING_TYPES[type], [type]);

    return <Component>{children}</Component>;
};
