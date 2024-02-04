import { Component } from '@angular/core';
import { ServiesService } from '../servies.service'; // import to servise כדי שיזהה אותו ונוכל להשתמש בפעולות שלו

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

  isOutOfStock(clothes: any): boolean { // takes a clothes object and returns true if it's out of stock, otherwise false
    return !clothes.inStock;
  }

  constructor(private serviesService: ServiesService) { } //injects the ServiesService into the component. כדי שנוכל להשתמש בו

  addToCart(clothes: any) {
    // Call the addToCart method from the service
    this.serviesService.addToCart(clothes);
  }

  clothesMen = [
    {
      id: 1, price: 90, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/U/UGI/UGI271/1XV2F0002/UGI271_1XV2_F0002_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true
    },
    {
      id: 2, price: 110, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/U/UCN/UCN547/1XV2F0009/UCN547_1XV2_F0009_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false
    },
    {
      id: 3, price: 150, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/G/GEP/GEP374/14E9F0008/GEP374_14E9_F0008_S_VMO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true
    },
    {
      id: 4, price: 180, imageUrl: "https://www.prada.com/content/dam/pradabkg_products/U/UP0/UP0251/1XV2F0002/UP0251_1XV2_F0002_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1000.1000.jpg",
      size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true
    },
  ]
}