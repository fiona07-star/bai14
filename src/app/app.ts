import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Catalog } from './catalog/catalog'; // 1. Import Catalog component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Catalog], // 2. Thêm Catalog vào mảng imports ở đây
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'bai14-app';
}