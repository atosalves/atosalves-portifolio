import type { ReactNode } from "react";

interface FooterItemProps {
    href: string;
    blank?: boolean;
    children: ReactNode;
}

export function FooterItem({ href, blank, children }: FooterItemProps) {
    return (
        <a
            href={href}
            target={blank ? "_blank" : "_self"}
            className="flex items-center border rounded-lg space-x-2 p-2 text-sm"
        >
            {children}
        </a>
    );
}
