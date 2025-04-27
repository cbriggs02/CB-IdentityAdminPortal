import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';

/**
 * @Author  : Christian Briglio
 * @Created : 2025
 *
 * @Description
 * MainLayoutComponent serves as the root layout container for the application.
 * It combines the top navigation bar, side navigation panel, and router outlet
 * to create a consistent page structure throughout the app.
 *
 * @Usage
 * This component is used to wrap views with the primary UI shell,
 * including layout and navigation elements shared across multiple routes.
 *
 * @Includes
 * - TopNavComponent: Displays the top navigation bar.
 * - SideNavComponent: Displays the sidebar navigation menu.
 * - RouterModule: Handles dynamic view rendering based on route configuration.
 */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [TopNavComponent, SideNavComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
