/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * AppComponent - Main component for the application.
 *
 * This component serves as the root container for the Angular application,
 * holding the primary title and setting up routing through the RouterOutlet.
 *
 * Dependencies:
 * - RouterOutlet: A directive that is used to insert routed components.
 *
 * Usage:
 * - The title property is used in the template to display the app's title.
 * - The RouterOutlet directive is used to display routed views inside this component.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
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
