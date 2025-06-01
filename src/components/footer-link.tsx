import type { ReactNode } from "react";

interface FooterLinkProps {
    link: string;
    blank?: boolean;
    children: ReactNode;
}

export function FooterLink({ link, blank, children }: FooterLinkProps) {
    return (
        <a
            href={link}
            target={blank ? "_blank" : "_self"}
            className="flex items-center border rounded-lg space-x-2 p-2 text-sm hover:underline"
        >
            {children}
        </a>
    );
}
