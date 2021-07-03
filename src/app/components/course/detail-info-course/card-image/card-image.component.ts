import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  message:string="";
  actionToAlert:string="";
  showInform:boolean= false;
  action:string="";

  constructor(private router:Router,
    private userService: UserService,
    private authService: authenticationService) { }

  ngOnInit(): void {
    if(localStorage.getItem('isLoggedin')=='true')
    {
      this.isLoggedin=true;
    } 
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
      {
        
        let email=localStorage.getItem('uemail')?localStorage.getItem('uemail'):"null";
        if(email!=null)
        {
          console.log(email)
          this.userService.getUserByEmail(email).subscribe(user=>
            {
              if(user.balance <this.course.price)
              {
              // console.log(this.userService.getUserByEmail(email).email)
                  this.actionToAlert="Your wallet";
                  this.message="The amount in your wallet is not enough to buy this course? Go to the wallet page to top up your account."
                  this.showInform=true;
                  this.action="wallet"
              }
              else{
                this.showInform= true;
                this.actionToAlert= "Buy now!"
                this.message="Are you sure to buy this course?"
                this.action="buy"
              }
            });
            
       }

      }
    else
      this.router.navigate(['/login']);
  }

  closeHandler(){
    this.showInform= false;
  }

  implementAction(gotowallet:boolean){
    this.showInform= true;
    if(gotowallet)
    {
      this.router.navigate(["/wallet"]);
    }
    //Buy course
    else{
      console.log(gotowallet)
      let email=localStorage.getItem('uemail')?localStorage.getItem('uemail'):"null";
      if(email!=null)
      {
        this.userService.getUserByEmail(email).subscribe(user =>{
          if(user.id!= undefined)
          {
            //update at here
            this.userService.buyCourse( user.id ,this.course.id);
            
            this.action="success_payment";
            this.actionToAlert=""
            this.message="Now you can learn this course."
            this.showInform= true;
            console.log(this.showInform)
          } 
          
        })
        
      }
      
    }
  }

}
