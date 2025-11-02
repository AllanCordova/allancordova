import { Component, OnInit, OnDestroy, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit, OnDestroy {
  activeSection = signal<string>('projects');
  private scrollTimeout?: number;

  ngOnInit(): void {
    this.checkActiveSection();
    this.scrollTimeout = window.setInterval(() => {
      this.checkActiveSection();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.scrollTimeout) {
      clearInterval(this.scrollTimeout);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkActiveSection();
  }

  checkActiveSection(): void {
    const sections = ['projects', 'about', 'stack', 'contact'];
    const scrollPosition = window.scrollY + 200; // Offset para considerar o header sticky
    let currentSection = 'projects';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        if (scrollPosition >= elementTop - 200) {
          currentSection = section;
          break;
        }
      }
    }

    this.activeSection.set(currentSection);
  }
}
