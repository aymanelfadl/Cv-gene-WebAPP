import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvTemplatesComponent } from '../cv-templates/cv-templates.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  imports: [CommonModule, CvTemplatesComponent],
})
export class SidenavComponent {}
