import { FirebaseService } from "./../services/firebase.service";

import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";
import { Observable } from "rxjs";
import { ShoppingCart } from "../models/shopping-cart";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  cart$: Observable<ShoppingCart>;

  constructor(
    public firebaseService: FirebaseService,
    private cartService: ShoppingCartService
  ) {}

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }

  logOut() {
    this.firebaseService.logOutUser();
  }
}
