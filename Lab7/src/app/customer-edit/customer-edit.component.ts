import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer = {};
  customerForm: FormGroup;
  customerID;
  customerFirstName;
  customerLastName;
  customerEmail;
  customerPhoneNumber;
  constructor(private router: Router, private route: ActivatedRoute, private MongoApi: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.customerForm = this.formBuilder.group({
      'customerID': [null, Validators.required],
      'customerFirstName': [null, Validators.required],
      'customerLastName': [null, Validators.required],
      'customerEmail': [null, Validators.required],
      'customerPhoneNumber': [null, Validators.required],
    });
    this.getCustomer(this.route.snapshot.params['id']);
  }

  onFormSubmit(form: NgForm) {
    const id = this.route.snapshot.params['id'];
    console.log(form)
    this.MongoApi.updateCustomer(id, form)
      .subscribe(res => {
        this.router.navigate(['/customer-details', id]);
      }, (err) => {
        console.log(err);
      });
  }
  getCustomer(id) {
    this.MongoApi.getCustomer(id).subscribe(data => {
      id = data._id;
      this.customerForm.setValue({
        customerID: data.customerID,
        customerFirstName: data.customerFirstName,
        customerLastName: data.customerLastName,
        customerEmail: data.customerEmail,
        customerPhoneNumber: data.customerPhoneNumber
      });
    });
  }
}
