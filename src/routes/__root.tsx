import { createRootRoute, Outlet } from "@tanstack/react-router";
import { MenuLink } from "../components/menu-link";
import { Loading } from "../components/loading";

import { Github, Linkedin, Mail } from "lucide-react";
import { FooterLink } from "../components/footer-link";
import { NotFound } from "../components/not-found";

export const Route = createRootRoute({
    component: Root,
    pendingComponent: Loading,
    notFoundComponent: NotFound,
});

function Root() {
    return (
        <>
            <div className="flex items-center space-x-4 md:space-x-8">
                <img src={import.meta.env.VITE_AVATAR_URL} alt="Avatar" className="size-32 rounded-full" />
                <div>
                    <h1 className="font-bold text-2xl md:text-4xl font-secundary">
                        Olá, eu sou o Atos Alves <span className="text-accent">:)</span>
                    </h1>
                    <h2 className="text-sm md:text-2xl text-accent">Desenvolvedor de Software.</h2>
                </div>
            </div>
            <section className="flex justify-around">
                <MenuLink path="/" label="Sobre" />
                <MenuLink path="/projects" label="Projetos" />
                <MenuLink path="/experience" label="Experiência" />
            </section>
            <main className="flex flex-col grow overflow-y-scroll p-2 space-y-4">
                <Outlet />
            </main>
            <footer className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-2 p-2">
                    <FooterLink link={import.meta.env.VITE_GITHUB_URL} blank>
                        <Github />
                        <span>GitHub</span>
                    </FooterLink>
                    <FooterLink link={`mailto:${import.meta.env.VITE_GMAIL}`}>
                        <Mail /> <span>Gmail</span>
                    </FooterLink>
                    <FooterLink link={import.meta.env.VITE_LINKEDIN_URL} blank>
                        <Linkedin />
                        <span>Linkedin</span>
                    </FooterLink>
                </div>
                <span className="font-semibold text-accent">&copy; 2025 Atos Alves</span>
            </footer>
        </>
    );
}
