import type { ReactNode } from "react";

interface IconItemProps {
    title: string;
    children: ReactNode;
}

export function IconItem({ title, children }: IconItemProps) {
    return (
        <div className="flex items-center space-x-2">
            {children} <span className="py-2">{title}</span>
        </div>
    );
}
