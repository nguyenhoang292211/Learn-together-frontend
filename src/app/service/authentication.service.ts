import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class authenticationService {

  constructor() { }

  storeUser(socialUser : SocialUser){
    if(typeof(localStorage))
      {
        localStorage.setItem('isLogegdin','true');
        localStorage.setItem('uname', socialUser.name);
        localStorage.setItem('authtoken',socialUser.email);
        localStorage.setItem('uphotoUrl',socialUser.photoUrl);
      }
  }

  signUp(){

  }

  

}
