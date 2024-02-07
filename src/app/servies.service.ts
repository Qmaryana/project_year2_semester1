import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiesService {

  constructor() { }

  ItemCount: number = 0;

  addToCart(item: any) {
    // Increment the count when an item is added to the cart
    this.ItemCount++;
  }
}