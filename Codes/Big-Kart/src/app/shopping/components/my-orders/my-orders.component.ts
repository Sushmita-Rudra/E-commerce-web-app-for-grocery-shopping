import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services/order.service";

import { FirebaseService } from "../services/firebase.service";

import { switchMap } from "rxjs/operators";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-my-orders",
  templateUrl: "./my-orders.component.html",
  styleUrls: ["./my-orders.component.css"],
})
export class MyOrdersComponent implements OnInit {
  closeResult = "";
  orders$;

  constructor(
    public firebaseService: FirebaseService,
    private orderService: OrderService,
    private modalService: NgbModal
  ) {
    this.orders$ = firebaseService.user$.pipe(
      switchMap((u) => orderService.getOrdersByUser(u.uid))
    );
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
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
