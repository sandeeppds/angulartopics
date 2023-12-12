import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  public clickeventmsg='';
  public msg = "On click of the button"
  eventclick(){
    this.clickeventmsg=" data is comming from class file to view"
  }
}
