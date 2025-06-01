/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_AVATAR_URL: string;
    readonly VITE_REPOS_URL: string;
    readonly VITE_GITHUB_URL: string;
    readonly VITE_LINKEDIN_URL: string;
    readonly VITE_GMAIL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
