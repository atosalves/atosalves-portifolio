import { Link } from "@tanstack/react-router";

interface MenuLinkProps {
    path: string;
    label: string;
}

export function MenuLink({ path, label }: MenuLinkProps) {
    return (
        <Link
            to={path}
            className="w-full text-center [&.active]:border-b-2 [&.active]:border-b-accent [&.active]:text-accent"
        >
            {label}
        </Link>
    );
}
