import { createFileRoute } from "@tanstack/react-router";
import { Label } from "../components/label";
import { Section } from "../components/section";
import { Atom, Coffee, Leaf, Triangle, Type } from "lucide-react";
import { IconItem } from "../components/icon-item";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <>
            <Section title="Sobre">
                Desenvolvedor <Label>Full-Stack</Label> em formação com sólida base em tecnologias modernas como
                <Label> Spring Boot e Next.js</Label>. Apaixonado por criar soluções robustas e eficientes, com
                experiência em desenvolvimento de
                <Label> APIs REST, aplicações web interativas e sistemas com foco em padrões de projeto.</Label>
            </Section>

            <Section title="Interesses">
                <IconItem title="Java">
                    <Coffee />
                </IconItem>
                <IconItem title="Typescript">
                    <Type />
                </IconItem>
                <IconItem title="SpringBoot">
                    <Leaf />
                </IconItem>
                <IconItem title="React">
                    <Atom />
                </IconItem>
                <IconItem title="NextJS">
                    <Triangle />
                </IconItem>
            </Section>

            <Section title="Educação">
                (01/2022 - Presente)
                <br />
                <Label>Tecnólogo em Análise e Desenvolvimento de Sistemas</Label>
                <br />
                IFPB Campus Monteiro 6/6
            </Section>
        </>
    );
}
