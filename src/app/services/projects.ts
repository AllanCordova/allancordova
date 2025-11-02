import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Project } from '../models/project.model';
import { GitHubRepo } from '../models/github-repo.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly GITHUB_API_URL = 'https://api.github.com';
  private readonly username = 'AllanCordova'; // Seu usuário está correto

  // ==========================================================
  // IMAGEM DEFAULT/PLACEHOLDER
  // ==========================================================
  /**
   * Imagem padrão SVG para projetos sem imagem customizada
   * Use 'DEFAULT' como valor no map para qualquer projeto que queira usar esta imagem
   */
  private readonly DEFAULT_PROJECT_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23D63384;stop-opacity:0.2' /%3E%3Cstop offset='100%25' style='stop-color:%23D63384;stop-opacity:0.05' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='url(%23grad)'/%3E%3Cg transform='translate(400, 300)'%3E%3Cpath d='M-60,-30 L-20,-50 L20,-50 L60,-30 L60,30 L20,50 L-20,50 L-60,30 Z' fill='none' stroke='%23D63384' stroke-width='3' opacity='0.3'/%3E%3Cpath d='M-40,-20 L0,-35 L40,-20 L40,20 L0,35 L-40,20 Z' fill='none' stroke='%23D63384' stroke-width='2' opacity='0.5'/%3E%3Ccircle cx='0' cy='0' r='15' fill='%23D63384' opacity='0.6'/%3E%3Ccircle cx='0' cy='0' r='8' fill='%23D63384'/%3E%3C/g%3E%3Ctext x='400' y='400' font-family='Arial, sans-serif' font-size='24' fill='%23D63384' text-anchor='middle' opacity='0.7'%3EProject Image%3C/text%3E%3C/svg%3E`;

  // ==========================================================
  // Mapeamento de Imagens Locais
  // ==========================================================
  /**
   * Mapeia o NOME EXATO do repositório no GitHub
   * para o caminho da imagem local nos seus assets.
   * Use 'DEFAULT' como valor para usar a imagem padrão.
   */
  private projectImageMap = new Map<string, string>([
    ['type-script-RPG', 'assets/images/type-script-rpg.png'],
    ['allancordova', this.DEFAULT_PROJECT_IMAGE],
    ['flashwise', this.DEFAULT_PROJECT_IMAGE],
    ['meals-work', this.DEFAULT_PROJECT_IMAGE],
    ['react-native', this.DEFAULT_PROJECT_IMAGE],
    ['programming-logic', 'assets/images/programming-logic.png'],
    ['data-structure', 'assets/images/data-structure.png'],
    ['mind-rush', this.DEFAULT_PROJECT_IMAGE],
    ['money-flow', this.DEFAULT_PROJECT_IMAGE],
    ['active-tracker', this.DEFAULT_PROJECT_IMAGE],
    ['typescript', 'assets/images/type-script.png'],
  ]);

  constructor(private http: HttpClient) {}

  /**
   * Obtém todos os projetos do GitHub
   */
  getProjects(): Observable<Project[]> {
    return this.getProjectsFromGitHub(this.username).pipe(
      map((repos: GitHubRepo[]) => {
        // Para cada repo, convertemos para Project (usando nossa nova lógica)
        return repos.map((repo) => this.convertGitHubRepoToProject(repo));
      }),
      catchError((error: unknown) => {
        console.error('Erro ao buscar projetos do GitHub:', error);
        return of([]);
      })
    );
  }

  /**
   * Busca projetos do GitHub
   */
  getProjectsFromGitHub(username: string): Observable<GitHubRepo[]> {
    const url = `${this.GITHUB_API_URL}/users/${username}/repos?type=owner&sort=pushed&per_page=100`;

    return this.http.get<GitHubRepo[]>(url);
  }

  /**
   * Converte um repositório do GitHub em Project
   * (Agora com o mapeamento de imagens e suporte a imagem default)
   */
  convertGitHubRepoToProject(repo: GitHubRepo): Project {
    const customImageUrl = this.projectImageMap.get(repo.name);

    let imageUrl: string;
    if (customImageUrl === 'DEFAULT') {
      imageUrl = this.DEFAULT_PROJECT_IMAGE;
    } else if (customImageUrl) {
      imageUrl = customImageUrl;
    } else {
      imageUrl = repo.owner.avatar_url;
    }

    return {
      id: repo.id.toString(),
      name: repo.name,
      description: repo.description || 'Sem descrição',
      repositoryUrl: repo.html_url,
      deployUrl: repo.homepage || undefined,

      imageUrl: imageUrl,

      technologies: repo.topics || [],
    };
  }
}
