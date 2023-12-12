import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  loginSubmit(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(`https://dummy.restapiexample.com/api/v1/create`, data, { headers });
  }
  getEmployeeDetails(){
    return this.http.get(`https://restcountries.com/v3.1/all`);
  }
}
