// app/models/github-repo.model.ts
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string; // Link para o repositório
  homepage: string | null; // Link para o deploy (GitHub Pages, etc)
  topics: string[]; // <-- Isso será suas 'technologies'
  owner: {
    avatar_url: string; // <-- Isso será sua 'imageUrl'
  };
  // Adicione outros campos se precisar (ex: language, stargazers_count)
}
