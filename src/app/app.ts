import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { About } from './components/about/about';
import { Stack } from './components/stack/stack';
import { Projects } from './components/projects/projects';
import { Form } from './components/form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, About, Stack, Projects, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('profile');

  ngOnInit(): void {
    // Prevenir scroll automático na inicialização
    if (typeof window !== 'undefined') {
      // Forçar scroll para o topo
      window.scrollTo(0, 0);
      // Prevenir scroll durante o carregamento
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 100);
    }
  }
}
