import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    return this.db
      .list("/categories")
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
}
