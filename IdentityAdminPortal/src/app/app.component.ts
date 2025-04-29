import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AppComponent - Main component for the application.
 *
 * This component serves as the root container for the Angular application,
 * holding the primary title and setting up routing through the RouterOutlet.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  /**
   * The title of the application, displayed in the template.
   * @type {string}
   */
  title: string = 'IdentityAdminPortal';
}
