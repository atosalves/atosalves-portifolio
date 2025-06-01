import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/section";
import { Label } from "../components/label";

export const Route = createFileRoute("/experience")({
    component: Experience,
});

export type Experience = {
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
    transferableSkills: string[];
};

export const experiences: Experience[] = [
    {
        title: "Projetista Interno",
        company: "Cara De Pau Marcenaria",
        period: "Novembro de 2021 – Maio de 2025",
        description:
            "Responsável pela criação de projetos técnicos de móveis planejados, desde orçamentos até o detalhamento final dos projetos, utilizando ferramentas de modelagem 3D e sistemas internos da empresa.",
        responsibilities: [
            "Criação de projetos técnicos de móveis planejados.",
            "Elaboração de orçamentos e detalhamento final de projetos.",
            "Colaboração em equipe na validação e otimização de designs.",
        ],
        achievements: [
            "Otimização de processos de contrução que resultou em melhorias de usabilidade do sistema para o uso colaborativo.",
            "Colaboração bem-sucedida em projetos complexos, garantindo a entrega dentro do prazo e especificação.",
        ],
        technologies: [
            "Sketchup",
            "Layout",
            "Dinabox (Sistema de gestão de projetos)",
            "Upmobb (Sistema de gestão de projetos)",
        ],
        transferableSkills: [
            "Atenção aos detalhes e precisão em projetos complexos.",
            "Habilidade de organização e estruturação de informações (similar à lógica de programação).",
            "Resolução de problemas e otimização de design.",
            "Colaboração e trabalho em equipe.",
            "Comunicação técnica e interpessoal.",
        ],
    },
];

function Experience() {
    return (
        <div className="flex flex-col divide-y divide-zinc-700">
            {experiences.map(
                ({
                    title,
                    company,
                    period,
                    description,
                    responsibilities,
                    achievements,
                    technologies,
                    transferableSkills,
                }) => (
                    <section key={title + company} className="">
                        <Section title={`${title} - ${company} (Fora da área de desenvolvimento)`}>
                            <Label>({period})</Label>
                            <br />
                            {description}
                            <br />
                            <br /> <Label>Responsabilidades:</Label>
                            <ul className="flex flex-col">
                                {responsibilities.map((responsibility) => (
                                    <li key={responsibility}>{responsibility}</li>
                                ))}
                            </ul>
                            <br /> <Label>Conquistas:</Label>
                            <ul className="flex flex-col">
                                {achievements.map((achievement) => (
                                    <li key={achievement}>{achievement}</li>
                                ))}
                            </ul>
                            <br /> <Label>Tecnologias:</Label>
                            <ul className="flex flex-col">
                                {technologies.map((technology) => (
                                    <li key={technology}>{technology}</li>
                                ))}
                            </ul>
                            <br /> <Label>Habilidades transferíveis:</Label>
                            <ul className="flex flex-col">
                                {transferableSkills.map((transferableSkill) => (
                                    <li key={transferableSkill}>{transferableSkill}</li>
                                ))}
                            </ul>
                        </Section>
                    </section>
                )
            )}
        </div>
    );
}
