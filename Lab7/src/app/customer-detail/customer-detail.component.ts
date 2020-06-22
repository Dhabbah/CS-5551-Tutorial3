import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer = {};

  constructor(private route: ActivatedRoute, private MongoApi: ApiService, private router: Router) {
  }

  ngOnInit() {
    this.getCustomerDetails(this.route.snapshot.params['id']);
  }

  getCustomerDetails(id) {
    this.MongoApi.getCustomer(id)
      .subscribe(data => {
        console.log(data);
        this.customer = data;
      });
  }

  deleteCustomer(id) {
    this.MongoApi.deleteCustomer(id)
      .subscribe(res => {
          this.router.navigate(['/customer']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
