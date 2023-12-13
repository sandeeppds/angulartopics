import { Component } from '@angular/core';

@Component({
  selector: 'app-outputdecorator',
  templateUrl: './outputdecorator.component.html',
  styleUrls: ['./outputdecorator.component.css']
})
export class OutputdecoratorComponent {
  public parentdata = "This data is coming from parent using @Input Decorator"
  public childtoparent : any;
}
