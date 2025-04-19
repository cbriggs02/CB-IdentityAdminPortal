/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * LoginComponent - A component for handling user login functionality.
 * It allows users to input their credentials and submit them to the authentication service.
 *
 * Dependencies:
 * - AuthService: A service that handles user authentication logic.
 *
 * Usage:
 * - This component uses the AuthService to submit login credentials and handle success or error responses.
 */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.services';
import { LoginCredentials } from '../models/login-credentials.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials: LoginCredentials = new LoginCredentials('', '');
  constructor(private authService: AuthService) {}

  /**
   * onSubmit - Handles the form submission and calls the AuthService to log in the user.
   * If login is successful, it will log the response. If it fails, it will log the error.
   */
  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login success:', response);
        // Handle success
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle error
      }
    );
  }
}
