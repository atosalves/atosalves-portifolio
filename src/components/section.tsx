import type { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
    return (
        <section>
            <h2 className="text-lg font-bold">{title}</h2>
            <span className="font-light text-sm">{children}</span>
        </section>
    );
}
