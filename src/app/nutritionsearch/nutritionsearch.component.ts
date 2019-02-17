import { Component, OnInit } from '@angular/core';

import { SearchTerm } from '../searchterm';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nutritionsearch',
  templateUrl: './nutritionsearch.component.html',
  styleUrls: ['./nutritionsearch.component.css']
})
export class NutritionSearchComponent {
  term = new SearchTerm('');
  submitted = false;
  // result: any;
  // result2: any;
  // constructor(private http: HttpClient) {
  // }
  onSubmit() {
    this.submitted = true;
  }
  /*
  show() {
    this.http.get('https://api.nutritionix.com/v1_1/search/' + 'chicken' +
      '?results=0:1&fields=*&appId=9d4dc906&appKey=a74471bd474457062749382d9154765b.json')
      .subscribe((result) => {
        this.result = result;
        console.log(this.result);

      });
    this.http.get('https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=' +
      'f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text=' + 'chicken')
      .subscribe((result2) => {
        this.result2 = result2;
        console.log(this.result2);

      });
  } */
}

