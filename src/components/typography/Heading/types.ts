import { PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren<{
    type: "page" | "section"; // Other heading types could go here to represent h3, h4, etc. heading types
}>;
