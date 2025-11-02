import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  // Links das redes sociais - substitua pelos seus links reais
  socialLinks = {
    github: 'https://github.com/seu-usuario', // Substitua pelo seu GitHub
    linkedin: 'https://linkedin.com/in/seu-perfil', // Substitua pelo seu LinkedIn
    email: 'mailto:seu-email@exemplo.com', // Substitua pelo seu email
    instagram: 'https://instagram.com/seu-perfil' // Substitua pelo seu Instagram (opcional)
  };
}
