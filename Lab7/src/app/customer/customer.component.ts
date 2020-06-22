import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any;
  displayedColumns = ['customerID', 'customerFirstName', 'customerEmail'];
  dataSource = new CustomerDataSource(this.MongoApi);

  constructor(private MongoApi: ApiService) {
  }

  ngOnInit() {
    this.MongoApi.getCustomers()
      .subscribe(res => {
        console.log(res);
        this.customers = res;
      }, err => {
        console.log(err);
      });
  }
}

export class CustomerDataSource extends DataSource<any> {
  constructor(private MongoApi: ApiService) {
    super();
  }

  connect() {
    return this.MongoApi.getCustomers();
  }

  disconnect() {

  }
}
