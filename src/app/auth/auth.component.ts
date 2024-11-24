import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.isLoginMode = url[0]?.path === 'login'; // Switch mode based on the URL
    });
  }

  onSubmit(): void {
    if (this.isLoginMode) {
      // Handle login
      console.log('Login with', this.email, this.password);
      // Perform login logic here
      this.router.navigate(['/home']);
    } else {
      console.log(
        'Sign Up with',
        this.firstName,
        this.lastName,
        this.email,
        this.password
      );
    }
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    const targetRoute = this.isLoginMode ? '/login' : '/signup';
    this.router.navigate([targetRoute]);
  }
}
