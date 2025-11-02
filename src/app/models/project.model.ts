export interface Project {
  id: string;
  name: string;
  description: string;
  repositoryUrl: string;
  deployUrl?: string;
  imageUrl?: string;
  technologies?: string[];
}

