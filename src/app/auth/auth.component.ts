import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  email: string = '';
  password: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.isLoginMode = url[0]?.path === 'login';
    });
  }

  onSubmit(): void {
    if (this.isLoginMode) {
      console.log('Login with', this.email, this.password);
      // Perform login logic here
    } else {
      console.log('Sign Up with', this.email, this.password);
      // Perform sign-up logic here
    }
  }
  // Switch between Login and Signup modes
  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    const targetRoute = this.isLoginMode ? '/login' : '/signup';
    this.router.navigate([targetRoute]);
  }
}
