import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html', // ou template inline
  styleUrl: './app.css'
})
export class App {
  title = 'Pratique-exo';
}
