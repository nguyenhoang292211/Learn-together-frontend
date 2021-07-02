import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { authenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {

  isLoggedin:boolean= false;
  photo: any;

  constructor(public socialAuth: SocialAuthService, public authService: authenticationService) { }

  ngOnInit(): void {
    if(typeof(localStorage))
    {
      
      this.authService.checkIsLoggedin().subscribe((loggedIn)=>
      {
        console.log(localStorage.getItem('isLoggedin'));
        this.isLoggedin= loggedIn;

        if(loggedIn)
          this.photo= localStorage.getItem('uphotoUrl');
      }
      );
    }
  }

  logOut(){
    //this.socialAuth.signOut();
    //this.authService.clearLocalStorage();
    this.authService.logOut();
    this.isLoggedin= false;
    
  }

  
}
