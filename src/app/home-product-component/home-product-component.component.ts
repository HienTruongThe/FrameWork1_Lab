import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-product-component',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home-product-component.component.html',
  styleUrl: './home-product-component.component.css'
})
export class HomeProductComponentComponent {
  products: any;
  httpClient = inject(HttpClient);
  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.httpClient.get('https://dummyjson.com/products')
      .subscribe((response: any) => {
        this.products = response.products;
      })
  }
};
