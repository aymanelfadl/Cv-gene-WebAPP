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
  // Array of CV template images (replace with actual image URLs)
  templates: string[] = [
    'https://via.placeholder.com/500x300?text=Template+1',
    'https://via.placeholder.com/500x300?text=Template+2',
    'https://via.placeholder.com/500x300?text=Template+3',
    // Add more template image URLs as needed
  ];

  currentTemplateIndex: number = 0;

  // Logic for auto-scrolling (optional)
  autoScroll() {
    setInterval(() => {
      if (this.currentTemplateIndex < this.templates.length - 1) {
        this.currentTemplateIndex++;
      } else {
        this.currentTemplateIndex = 0; // Reset to first template when reaching the last
      }
    }, 3000); // Auto-scroll every 3 seconds (adjust as needed)
  }

  ngOnInit() {
    this.autoScroll();
  }
}
