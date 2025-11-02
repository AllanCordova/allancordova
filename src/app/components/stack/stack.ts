import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackItem } from '../../models/stack-item.model';

@Component({
  selector: 'app-stack',
  imports: [CommonModule],
  templateUrl: './stack.html',
  styleUrl: './stack.css',
})
export class Stack {
  technologies = signal<StackItem[]>([
    {
      name: 'HTML5',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      category: 'frontend'
    },
    {
      name: 'CSS3',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      category: 'frontend'
    },
    {
      name: 'JavaScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      category: 'frontend'
    },
    {
      name: 'TypeScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      category: 'frontend'
    },
    {
      name: 'Bootstrap',
      iconUrl: 'https://cdn.simpleicons.org/bootstrap/7952B3',
      category: 'frontend'
    },
    {
      name: 'SASS',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
      category: 'frontend'
    },
    {
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'frontend'
    },
    {
      name: 'Node.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      category: 'backend'
    },
    {
      name: 'PHP',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      category: 'backend'
    },
    {
      name: 'MySQL',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      category: 'database'
    },
    {
      name: 'MongoDB',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      category: 'database'
    },
    {
      name: 'Docker',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      category: 'tools'
    },
    {
      name: 'Jest',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      category: 'testing'
    }
  ]);
}
