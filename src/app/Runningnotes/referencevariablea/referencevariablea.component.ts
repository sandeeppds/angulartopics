import { Component } from '@angular/core';

@Component({
  selector: 'app-referencevariablea',
  templateUrl: './referencevariablea.component.html',
  styleUrls: ['./referencevariablea.component.css']
})
export class ReferencevariableaComponent {
  public rValuemsg = "";
twodatadinging: any;
  rbtnclick(msg: any){
    return this.rValuemsg = msg
  }
}
