import { createFileRoute } from "@tanstack/react-router";
import { Loading } from "../components/loading";
import { ErrorMessage } from "../components/error-message";
import { Section } from "../components/section";

export const Route = createFileRoute("/projects")({
    component: Projects,
    loader: () => fetchRepos(),
    pendingComponent: Loading,
    errorComponent: ({ error }) => <ErrorMessage message={error.message} />,
});

function Projects() {
    const json = Route.useLoaderData();

    return (
        <div className="flex flex-col divide-y divide-secundary">
            {json.map(({ id, name, description, html_url, topics }) => (
                <a
                    href={html_url}
                    key={id}
                    target="_blank"
                    className="hover:bg-secundary divide-secundary cursor-pointer space-y-2 p-2"
                >
                    <Section title={name}>{description ?? "Sem descrição"}</Section>
                    <div className="flex space-x-2">
                        {topics.length === 0 ? (
                            <span className="font-light text-sm">Sem tópicos</span>
                        ) : (
                            topics.map((topic) => (
                                <span key={topic} className="text-xs font-extralight border rounded-lg p-1">
                                    {topic}
                                </span>
                            ))
                        )}
                    </div>
                </a>
            ))}
        </div>
    );
}

async function fetchRepos() {
    const response = await fetch(import.meta.env.VITE_REPOS_URL);
    if (!response.ok) throw new Error("Falha ao buscar repositórios");

    const json: { id: string; name: string; description: string; html_url: string; topics: string[] }[] =
        await response.json();
    return json;
}
