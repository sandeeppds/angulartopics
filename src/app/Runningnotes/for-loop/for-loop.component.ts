import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent {
  public cars = [
    "i20","BMW","Audi"
  ]

  public empDetails = {
    id : 12470,
    name : "sandeep",
    role : "UI-Developer",
  }

  public empInfo = [
    {
      id : 12470,
      name : "sandeep",
      role : "UI-Developer",
    },
    {
      id : 12470,
      name : "Kiran",
      role : "UI-Developer",
    }
  ]
}
