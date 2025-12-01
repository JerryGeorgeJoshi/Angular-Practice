import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fooditemsummary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fooditemsummary.component.html',
  styleUrl: './fooditemsummary.component.css',
})
export class FooditemsummaryComponent {
  foodName: string;
  originalPrice: number;
  discount: number;
  foodRating: number;
  constructor() {
    this.foodName = 'Veg Burger';
    this.originalPrice = 120.8;
    this.discount = 0.15;
    this.foodRating = 4.5;
  }
}
