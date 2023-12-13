import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputdecorator',
  templateUrl: './inputdecorator.component.html',
  styleUrls: ['./inputdecorator.component.css']
})
export class InputdecoratorComponent {
  @Input() public fromParent: any;
}
