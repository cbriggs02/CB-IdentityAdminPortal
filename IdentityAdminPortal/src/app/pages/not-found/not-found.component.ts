/**
 * @Author : Christian Briglio
 * @Created : 2025
 *
 * NotFoundComponent - A component displayed when the user navigates to a page that does not exist.
 * This component serves as the 404 Page Not Found page and includes a link to return to the home page.
 */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
