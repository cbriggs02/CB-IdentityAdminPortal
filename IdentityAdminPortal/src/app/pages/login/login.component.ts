import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LoginCredentials } from '../../models/login-credentials.model';
import { ErrorMessages } from '../../constants/error-messages.constants';
import { LoginApiErrorTypes } from '../../enums/api-error-types/login-api-error-types.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiErrorResponse } from '../../interfaces/shared/api-error-response.interface';
import { Router } from '@angular/router';
import { AppRoutes } from '../../constants/routes/app-routes.constants';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * LoginComponent - A component for handling user login functionality.
 * It allows users to input their credentials and submit them to the authentication service.
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials: LoginCredentials = new LoginCredentials('', '');
  errorMessage: string = '';
  hidePassword = true;

  /**
   * Constructor for the LoginComponent.
   * Initializes the component with necessary services for authentication and routing.
   *
   * @param authService - The authentication service used for logging in the user.
   * @param router - The Angular Router service used for navigating to different routes in the application.
   */
  constructor(private authService: AuthService, private router: Router) { }

  /**
   * togglePassword - Toggles the visibility of the password input field.
   */
  togglePassword () {
    this.hidePassword = !this.hidePassword;
  }

  /**
   * onSubmit - Handles the form submission and calls the AuthService to log in the user.
   */
  onSubmit () {
    this.authService.login(this.credentials).subscribe(
      () => {
        this.errorMessage = '';
        this.router.navigate([AppRoutes.DASHBOARD]);
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = this.mapErrorMessage(error);
      }
    );
  }

  private mapErrorMessage (error: HttpErrorResponse): string {
    const apiErrorResponse = error.error as ApiErrorResponse;

    if (error?.status === 400 && apiErrorResponse?.errors) {
      const errors = apiErrorResponse?.errors;

      if (errors.includes(LoginApiErrorTypes.InvalidCredentials)) {
        return ErrorMessages.Auth.InvalidCredentials;
      }

      if (errors.includes(LoginApiErrorTypes.AccountNotActivated)) {
        return ErrorMessages.Auth.AccountNotActivated;
      }

      return errors.join(', ');
    } else if (error.status === 404) {
      return ErrorMessages.Auth.UserNotFound;
    }

    return ErrorMessages.Common.UnknownError;
  }
}
