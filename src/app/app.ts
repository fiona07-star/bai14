import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Catalog } from './catalog/catalog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Catalog],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'bai14-app';
}
