import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-specremove',
  templateUrl: './specremove.component.html',
  styleUrls: ['./specremove.component.css']
})
export class SpecremoveComponent {
  get login() { return this.loginForm.get('login'); }
  loginForm = new FormGroup({
    login: new FormControl("",Validators.required),
    password:new FormControl("")
  });
  countries$ = new BehaviorSubject<any>([]);
  constructor(private _service:ServiceService){}
  onSubmit(){
    this._service.loginSubmit(this.loginForm.value).subscribe((res:any)=>{ }) 
    this._service.getEmployeeDetails().subscribe((res:any)=>{
    this.countries$.next(res);
    })
  }
}
