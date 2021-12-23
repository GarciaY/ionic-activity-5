import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _url: string = environment.url;


  constructor(private http: HttpClient) { }

  updateRequest(data) {
    return this.http.post(this._url + 'update', data);
  }

  loginRequest(data) {
    return this.http.post(this._url + 'login', data);
  }

  signUpRequest(data) {
    return this.http.post(this._url + 'signup', data);
  }


}
