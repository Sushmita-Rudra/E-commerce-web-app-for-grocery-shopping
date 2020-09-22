import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-admin-orderdetails',
  templateUrl: './admin-orderdetails.component.html',
  styleUrls: ['./admin-orderdetails.component.css']
})
export class AdminOrderdetailsComponent implements OnInit {
  order;
  constructor(
    
    private route: ActivatedRoute, 
    private orderService: OrderService
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    if(id) this.orderService.get(id).take(1).subscribe(p => this.order = p);
  }

  ngOnInit() {
  }

}
