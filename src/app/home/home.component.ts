import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CvTemplatesComponent } from '../cv-templates/cv-templates.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidenavComponent, CvTemplatesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
