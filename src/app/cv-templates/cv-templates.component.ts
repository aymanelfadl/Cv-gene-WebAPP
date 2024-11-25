import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-templates',
  templateUrl: './cv-templates.component.html',
  styleUrls: ['./cv-templates.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class CvTemplatesComponent {
  templates: string[] = ['1.jpg', '2.png', '2.png'];

  currentTemplateIndex: number = 0;

  autoScroll() {
    setInterval(() => {
      if (this.currentTemplateIndex < this.templates.length - 1) {
        this.currentTemplateIndex++;
      } else {
        this.currentTemplateIndex = 0;
      }
    }, 10000);
  }

  ngOnInit() {
    this.autoScroll();
  }
}
