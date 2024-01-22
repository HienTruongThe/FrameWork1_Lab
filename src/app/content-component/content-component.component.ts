import { Component } from '@angular/core';
import { SlideComponentComponent } from '../slide-component/slide-component.component';
import { HomeProductComponentComponent } from '../home-product-component/home-product-component.component';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [SlideComponentComponent, HomeProductComponentComponent],
  templateUrl: './content-component.component.html',
  styleUrl: './content-component.component.css'
})
export class ContentComponentComponent {

}
