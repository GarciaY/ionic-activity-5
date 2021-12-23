import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
 export class ProfilePage implements OnInit {

  updateForm: FormGroup
  data:any=[]
  constructor(private fb: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.getLocalStorage();
    this.updateForm = this.fb.group({
      id: [this.data.id],
      username: [this.data.username],
      email: [this.data.email],
      phone: [this.data.phone],
      password: [this.data.password],
    })
  }
  update(){
    this.userService.updateRequest(this.updateForm.value).subscribe((res:any)=>{
      if(res.data){
        this.router.navigate(['/profile'])
        localStorage.setItem('user', JSON.stringify(res.data));
      }
      else if(res.data){
        console.log(res.data);
      }
    });
    
  }

  getLocalStorage(){
    this.data = JSON.parse(localStorage.getItem("user"));
    console.log(this.data);
  }
}
