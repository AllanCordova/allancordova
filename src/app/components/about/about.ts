import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  // URL do currículo - coloque seu arquivo PDF na pasta public e ajuste o nome aqui
  // Ou use um link externo (Google Drive, Dropbox, etc.)
  resumeUrl = 'resume.pdf'; // Arquivo deve estar na pasta public/
}
