import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm:FormGroup
  constructor(private router: Router, private FB:FormBuilder, private userService:UserServiceService) { }

  ngOnInit() {
    this.loginForm=this.FB.group({
      email:['',Validators.required],
      password:['',Validators.required],

    })
  }

  login(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.userService.loginRequest(this.loginForm.value).subscribe((rest:any)=>{
        console.log(rest)
        if(rest.data){
          this.router.navigate(['/profile'])
          localStorage.setItem('user',JSON.stringify(rest.data))
        }
        else if(rest.error){
          console.log(rest.error)

        }
      })
    }
  }

}
