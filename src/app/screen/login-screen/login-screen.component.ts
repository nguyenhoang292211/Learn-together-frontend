import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SocialAuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login'
import {  authenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css'],
  encapsulation :ViewEncapsulation.Emulated
})
export class LoginScreenComponent implements OnInit {

  socialUser = new SocialUser();
  isLoggedin: boolean= false;  

  constructor( private socialAuthService: SocialAuthService, private authService: authenticationService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
      this.authService.storeUser(this.socialUser);
      
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  
  }

  signupWithGoogle(): void{

  }

  logOut(): void {
    this.socialAuthService.signOut();
    this.clearLocalStorage();

  }

  clearLocalStorage(){
    localStorage.clear();
  }



}
