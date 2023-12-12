import { Component } from '@angular/core';

@Component({
  //selector: 'app-p-binding', //This is a custom element :
  //selector: '.app-p-binding', //This is a class
  selector: '[app-p-binding]', //This is a property binding
  templateUrl: './p-binding.component.html',
  styleUrls: ['./p-binding.component.css']
})
export class PBindingComponent {

}
