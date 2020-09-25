import { Component, OnInit, Input } from "@angular/core";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: "app-product-filter",
  templateUrl: "./product-filter.component.html",
  styleUrls: ["./product-filter.component.css"],
})
export class ProductFilterComponent implements OnInit {
  categories: any[];
  @Input("category") category;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  ngOnInit(): void {}
}
