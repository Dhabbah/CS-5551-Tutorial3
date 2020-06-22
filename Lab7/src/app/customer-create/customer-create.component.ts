import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;
  customerID;
  customerFirstName;
  customerLastName;
  customerEmail;
  customerPhoneNumber;

  constructor(private router: Router, private MongoApi: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      'customerID': [null, Validators.required],
      'customerFirstName': [null, Validators.required],
      'customerLastName': [null, Validators.required],
      'customerEmail': [null, Validators.required],
      'customerPhoneNumber': [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.MongoApi.AddCustomer(form)
      .subscribe(res => {
        const customerID = res['_id'];
        this.router.navigate(['/customer-details', customerID]);
      }, (err) => {
        console.log(err);
      });
  }
}
