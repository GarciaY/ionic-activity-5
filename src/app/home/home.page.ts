import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, 
         FormGroup, 
        FormBuilder,
      Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private fb: FormBuilder) {}

  
  get email() {
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password')
  }


  loginForm = this.fb.group({
    email: ['', 
    [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
    ]
  ],
    password: ['', [Validators.required,
                   Validators.maxLength(20)
              ]
    ],
  });


  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required'},
      { type: 'maxlength', message: 'Password must not exceed at 20 characters'}
    ]
  }
  

  ngOnInit(){


  }

  login(){
    //if else could apply if there are API to validate
    this.router.navigate(['/profile'])
  }

}
