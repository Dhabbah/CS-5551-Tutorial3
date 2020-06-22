import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.page.html',
  styleUrls: ['./service2.page.scss'],
})
export class Service2Page implements OnInit {
  state = 'MO';
  city = 'Kansas City';
  result: any;
  result2: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
     show() {
    this.http.get('https://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' +
        this.state + '/' + this.city + '.json')
        .subscribe((result) => {
          this.result = result;
          console.log(this.result);
        });
    this.http.get('https://api.wunderground.com/api/36b799dc821d5836/hourly/q/' +
        this.state + '/' + this.city + '.json')
        .subscribe((result2) => {
          this.result2 = result2;
          console.log(this.result2);
        });
  }

  show1() {
      console.log(this.result2);
  }
}
