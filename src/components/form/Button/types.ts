import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
    type: "primary" | "secondary";
}>;
