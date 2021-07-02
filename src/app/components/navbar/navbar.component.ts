import { Component, OnInit, ViewEncapsulation } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { authenticationService } from 'src/app/service/authentication.service';
>>>>>>> edaa1d3... update navbar

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {

<<<<<<< HEAD
  titleSearch: string = "";

  constructor(private router: Router,
              private route: ActivatedRoute) { }
=======
  isLoggedin:boolean= false;
  photo: any;

  constructor(public socialAuth: SocialAuthService, public authService: authenticationService) { }
>>>>>>> edaa1d3... update navbar

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

  refreshComponent(){
    this.router.navigate([this.router.url])
 }

  onLoadSearch(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['search'], {queryParams: {title: this.titleSearch }, fragment: 'loading'});
   
  }


  
}
