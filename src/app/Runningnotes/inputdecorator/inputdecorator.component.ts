import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputdecorator',
  templateUrl: './inputdecorator.component.html',
  styleUrls: ['./inputdecorator.component.css']
})
export class InputdecoratorComponent {
  @Input() public fromParent: any;
  @Output() public sendingMessageFromChild = new EventEmitter();
  childtoParent(){
    this.sendingMessageFromChild.emit("On Click of the button Data received from child to parent")
  }
}
