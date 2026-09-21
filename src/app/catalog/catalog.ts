import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { CatalogService } from '../services/catalog'; 
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule], // 2. Khai báo CommonModule vào đây
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog implements OnInit {
  categories: any;

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}