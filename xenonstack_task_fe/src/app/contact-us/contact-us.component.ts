import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private router:Router,private fb:FormBuilder,private userService:UserServiceService){}
  contactForm = this.fb.group({
    email:[''],
    phone:[''],
    description:['']
  })
  submit(){
    this.userService.contactUs({
      email:this.contactForm.get('email')?.value,
      phone:this.contactForm.get('phone')?.value,
      description:this.contactForm.get('description')?.value,
    }).subscribe(data=>{
      this.router.navigate(["/home"]);
    })
  }
}
