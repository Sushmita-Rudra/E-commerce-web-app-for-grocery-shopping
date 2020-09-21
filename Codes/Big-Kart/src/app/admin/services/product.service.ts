import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private db: AngularFireDatabase) {}

  createProduct(product) {
    return this.db.list("/products").push(product);
  }

  getAllProducts() {
    return this.db
      .list("/products")
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.val();
            const key = action.payload.key;
            return {
              key,
              data,
            };
          });
        })
      );
  }

  getProduct(productId) {
    return this.db.object("/products/" + productId).valueChanges();
  }

  updateProduct(productId, product) {
    return this.db.object("/products/" + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object("/products/" + productId).remove();
  }
}
