import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiesService {

  constructor() { }

  cart: any[] = []; //משתנה בשם cart הגדרנו שהוא מערך

  addToCart(item: any) {
    // Add item to the cart
    this.cart.push(item); //דוחפת את הבגד לסל קניות
  }
}