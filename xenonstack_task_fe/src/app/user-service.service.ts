import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:String = "http://localhost:9000/user/v1/"

  registerUser(userData:any){
    return  this.http.post(this.baseUrl+"register",userData);
   }
  
  loginCheck(userData:any){
    return this.http.post(this.baseUrl+"login",userData);
  }

  contactUs(data:any){
    return this.http.post(this.baseUrl+"contact",data);
    
  }
}
