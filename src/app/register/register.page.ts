import { UtilService } from './../services/util.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup
  constructor(private router: Router, private fb: FormBuilder,
     private userService: UserServiceService,
     private navcontrol: NavController, private util: UtilService,) {}
    

  get email() {
    return this.profileForm.get('email');
  }

  get username() {
    return this.profileForm.get("username");
  }

  get password() {
    return this.profileForm.get('password');
  }
  
  get street(){
    return this.profileForm.get('address.street');
  }

  profileForm = this.fb.group({
    email: ['', 
    [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
    ],
    
  ],
    username: ['', [Validators.required, Validators.maxLength(20)]],
    password: ['', [Validators.required, Validators.maxLength(20)]]
  });

  public errorMessages = {
    username: [
      { type: 'required', message: 'username is required' },
      { type: 'maxlength', message: 'Username should not be longer than 20 characters' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'maxlength', message: 'Password should not exceed at 20 characters'}
      
      
    ]
  }


  

  ngOnInit() {
    this.signupForm=this.fb.group({
      username: ["",Validators.required],
      email: ["",Validators.required],
      phone: ["",Validators.required],
      password: ["",Validators.required],
    })
  }

  signUp(){
    this.userService.signUpRequest(this.signupForm.value).subscribe((rest:any)=>{
      console.log(rest)
      this.router.navigate(["/login"])
    })
  }

}
