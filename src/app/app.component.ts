import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Runningnotes';
  public duplicatetext:any;
  formData = {
    name: '',
    email: ''
  };
  Interpolation(){
    return this.title;
  }
  onSubmit() {
    // Handle form submission here
    console.log('Form submitted with data:', this.formData);
  }
}