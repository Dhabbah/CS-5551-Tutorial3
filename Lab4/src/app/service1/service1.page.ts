import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.page.html',
  styleUrls: ['./service1.page.scss'],
})
export class Service1Page implements OnInit {

  constructor(private http: HttpClient) {
  }

  API_KEY = 'AIzaSyDPG9vOhnT8g_NYQ33bQocDWS8l7AH4AT0';
  FirstName = 'Donald';
  LastName = 'Trump';
  result: any;

  ngOnInit() {
  }

  show() {
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' +
        this.FirstName + '+' + this.LastName + '&key=' + this.API_KEY + '&limit=1&indent=True')
        .subscribe((result) => {
          this.result = result;
          console.log(this.result);
        });
  }
}
