import { Link } from "@tanstack/react-router";

interface MenuLinkProps {
    path: string;
    label: string;
}

export function MenuLink({ path, label }: MenuLinkProps) {
    return (
        <Link to={path} className="[&.active]:border-b-2 [&.active]:border-b-orange-400 [&.active]:text-orange-400">
            {label}
        </Link>
    );
}
