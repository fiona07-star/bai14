import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { CatalogService } from '../services/catalog'; 
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
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
