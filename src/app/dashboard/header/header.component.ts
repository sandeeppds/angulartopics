import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  numbers: number[] = [5, 2, 9, 1, 5, 6];
  sortedNumbers: number[];
  people = ["Sandeep","Naveen"];
  sortedPeople;
  constructor() {
    // Sort the array
    this.sortedNumbers = this.numbers.slice().sort((a, b) => b - a);
    this.sortedPeople = this.people.slice().sort((a, b) => a.localeCompare(b));
  }
  
}
