import { Component } from '@angular/core';
import { ServiesService } from '../servies.service'; // import to servise כדי שיזהה אותו ונוכל להשתמש בפעולות שלו

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {

  isOutOfStock(clothes: any): boolean { // takes a clothes object and returns true if it's out of stock, otherwise false
    return !clothes.inStock;
  }

  constructor(private serviesService: ServiesService) { } //injects the ServiesService into the component. כדי שנוכל להשתמש בו

  addToCart(clothes: any) {
    // Call the addToCart method from the service
    this.serviesService.addToCart(clothes);
  }

  clothesWomen = [
    {
      id: 1, price: 90, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/P/P26/P26481/12C6F0002/P26481_12C6_F0002_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['XS', 'S', 'M', 'L'], inStock: true
    },
    {
      id: 2, price: 105, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/2/291/291805/1XJXF0002/291805_1XJX_F0002_S_222_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['XS', 'S', 'M', 'L', 'XL'], inStock: true
    },
    {
      id: 3, price: 150, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP497/12PAF01CD/GFP497_12PA_F01CD_S_231_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['XS', 'S', 'M', 'L',
        'XL'], inStock: false
    },
    {
      id: 4, price: 180, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/G/GFP/GFP503/13Z6F0BAN/GFP503_13Z6_F0BAN_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['XS', 'S', 'M', 'L',
        'XL'], inStock: true
    },
  ]
}