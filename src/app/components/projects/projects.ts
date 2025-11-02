import {
  Component,
  OnInit,
  AfterViewInit,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects';
import { Project } from '../../models/project.model';

declare var Swiper: any;

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Projects implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer', { static: false }) swiperContainer?: ElementRef;
  projects = signal<Project[]>([]);
  loading = signal<boolean>(true);

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  ngAfterViewInit(): void {
    // Prevenir scroll automático
    if (typeof window !== 'undefined') {
      // Garantir que estamos no topo
      window.scrollTo(0, 0);
    }

    // Configurar Swiper após os projetos serem carregados
    setTimeout(() => {
      this.initSwiper();
    }, 500);
  }

  initSwiper(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      slidesPerView: 1.3,
      spaceBetween: 30,
      breakpoints: {
        // when window width is >= 768px (tablets)
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1024px (desktops)
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 1400px (large screens)
        1400: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  loadProjects(): void {
    this.loading.set(true);
    this.projectsService.getProjects().subscribe({
      next: (projects: Project[]) => {
        this.projects.set(projects);
        this.loading.set(false);
        // Prevenir scroll durante o carregamento
        if (typeof window !== 'undefined') {
          const currentScroll = window.scrollY;
          setTimeout(() => {
            // Manter posição do scroll
            window.scrollTo(0, currentScroll);
            // Inicializar Swiper após os projetos serem renderizados
            this.initSwiper();
          }, 500);
        }
      },
      error: (error: unknown) => {
        console.error('Erro ao carregar projetos:', error);
        this.loading.set(false);
      },
    });
  }

  /**
   * Trunca um texto para um número específico de caracteres
   * @param text Texto a ser truncado
   * @param limit Limite de caracteres (padrão: 150)
   * @returns Texto truncado com "..." se exceder o limite
   */
  truncateText(text: string, limit: number = 150): string {
    if (!text) return '';
    if (text.length <= limit) return text;
    return text.substring(0, limit).trim() + '...';
  }
}
