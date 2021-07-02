import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { authenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  @Input() course = new Course();
  isLoggedin: boolean= false;

  constructor(
    private router:Router,
    private userService: UserService,
    private authService: authenticationService ) { }

  ngOnInit(): void {
    this.authService.checkIsLoggedin().subscribe(isLoggedin => this.isLoggedin= isLoggedin);

  }

  //Checkout this course is bought by user if user logined
  isBought():boolean{
    if(this.isLoggedin)
    {
      return false;
    }
    else
     //check is bought
    if(this.userService.checkCourseBought())
      return true;
    else  return false;
  }

  handlePriceFormat(price:number):any{

    var price_format="";
    var zero;
    while(price%1000==0)
    {
      price= price/1000;
      
       zero =price_format;
      price_format = ".000"+price_format;
    }
    zero = price_format;
    price_format=price.toString()+ price_format+"đ";

    return price_format;
  }

  goToCourse(id: string, name:string){
    
    this.router.navigate(['/learning',id, name]);
  }

  goToWallet(){
    if(this.isLoggedin)
      this.router.navigate(['/wallet']);
    else
      this.router.navigate(['/login']);
  }



}
