import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'APR Calculator';
  apr: number = 10;
  days: number = 365;
  starting_capital: number = 10000;
  results: Array<number> = [];

  constructor() {}

  recalc() {
    this.results = [];
    let amount: number = this.starting_capital;
    for(let i=0; i<this.days; i++){
      amount = amount * ((this.apr / 365/ 100) + 1);
      this.results.push(amount);
    }
  }
}
//=INDIRECT(ADDRESS(ROW()-1, COLUMN()))*((C2/365/100)+1)