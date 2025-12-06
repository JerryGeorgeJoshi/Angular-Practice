import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-foodcategoryshowcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foodcategoryshowcase.component.html',
  styleUrl: './foodcategoryshowcase.component.css',
})
export class FoodcategoryshowcaseComponent {
  categories = [
    {
      title: 'Pizza',
      image: 'pizzaImg.jpeg',
      description: 'Hot and cheesy pizzas loaded with toppings.',
    },
    {
      title: 'Burgers',
      image: 'pizzaImg.jpeg',
      description: 'Jiucy and crunchy burgers with unique flavors.',
    },
    {
      title: 'Beverages',
      image: 'pizzaImg.jpeg',
      description: 'Cold coffees, soft drinks, and fresh juices.',
    },
  ];
}
