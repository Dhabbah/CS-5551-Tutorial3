import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  food = 'Whole chicken';
result;


  constructor(private GetHttp: HttpClient) { }

  ngOnInit() {
  }

  show() {
    console.log(this.result);
  }
  getNutrition() {
    this.GetHttp.get('https://api.nutritionix.com/v1_1/search/' +
      this.food + '?results=0:1&fields=*&appId=1c1ccd2c&appKey=cc82e01a3d45d384c04f28511568c367')
      .subscribe((result) => {
        this.result = result;
        console.log(this.result);
      });
}
  getVoice() {
    this.GetHttp.get('https://api.nutritionix.com/v1_1/search/' +
      this.food + '?results=0:1&fields=*&appId=1c1ccd2c&appKey=cc82e01a3d45d384c04f28511568c367')
      .subscribe((result) => {
        this.result = result;
        console.log(this.result);
      });
}
}
