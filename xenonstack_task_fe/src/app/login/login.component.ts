import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
    // console.log(localStorage.getItem("emailId"))
    // console.log(localStorage.getItem("jwt"))
  }
  loginForm = this.fb.group({
    email: ['',Validators.required],
    password: ['',Validators.required]
   });

   get email() { return this.loginForm.get("email") }
   get password() { return this.loginForm.get("password") }

   decodeEmail:any;
   data:any;

   loading:boolean=false;
   onSubmit(){
    this.loading = true;
    this.userService.loginCheck(this.loginForm.value).subscribe(
      response =>{ 
        this.data=response;
        localStorage.setItem('emailId',this.data.email);      
      this.router.navigate(["/home"]).then(()=>{
        window.location.reload();
      })
      },
      (error) =>{
        this.loading = false
        alert("you have entered wrong login credentials");
        if(error.response = 404){
          console.log(error.response)
          
        }else{
          console.log(error.response)
          
        }
        
      }
    )
  }
}
