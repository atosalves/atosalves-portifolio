import type { ReactNode } from "react";

interface LabelProps {
    children: ReactNode;
}

export function Label({ children }: LabelProps) {
    return <span className="font-bold">{children}</span>;
}
