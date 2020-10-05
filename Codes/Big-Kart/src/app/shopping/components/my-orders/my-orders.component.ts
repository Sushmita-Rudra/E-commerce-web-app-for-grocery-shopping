import { AuthService } from "shared/services/auth.service";
import { OrderService } from "../../../shared/services/order.service";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/switchMap";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"],
})
export class MyOrdersComponent {
  orders$;
  closeResult = "";

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private modalService: NgbModal
  ) {
    this.orders$ = authService.user$.switchMap((u) =>
      orderService.getOrdersByUser(u.uid)
    );
  }

  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
