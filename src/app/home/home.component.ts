import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private GetHttp: HttpClient, private auth: AuthService) { }
  food;
  result;
  result2;
  FirstName = this.auth.FirstName;
  LastName = this.auth.LastName;

  ngOnInit() {
  }
  getNutrition() {
    if ((this.food != null)) {
      this.GetHttp.get('https://api.nutritionix.com/v1_1/search/' +
        this.food + '?results=0:1&fields=*&appId=1c1ccd2c&appKey=cc82e01a3d45d384c04f28511568c367')
        .subscribe((result) => {
          this.result = result;
          console.log(this.result);
          this.result2 = 'http://api.voicerss.org/?key=386cda37d86f4ea3a22ad8ad860a4165&hl=en-us&src=' + this.food;
        });
       }
  }
}
