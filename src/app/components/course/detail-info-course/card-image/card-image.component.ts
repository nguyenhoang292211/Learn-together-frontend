import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { User } from 'src/app/models/user.model';
import { authenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { PriceFormat } from 'src/app/util/priceformat';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CardImageComponent implements OnInit {

  @Input() course = new Course();
  isBought: boolean= false;
  isLoggedin!: Observable<boolean>;
  learner!: User;
  message:string="";
  actionToAlert:string="";
  showInform:boolean= false;
  action:string="";

  constructor(private router:Router,
    private userService: UserService,
    private authService: authenticationService) { }

  ngOnInit(): void {

    //when reloading page, it will not update checkIsLoggedin despite of having subcribe
    if(localStorage.getItem('isLoggedin')=='true')
    {
      this.isLoggedin= of(true);
    } 

    

    //Subcibe loggedin status
    this.authService.checkIsLoggedin().subscribe(
      isLoggedin =>{
        this.isLoggedin= of(isLoggedin) 
        
      });

      if(this.isLoggedin){
        let email=localStorage.getItem('uemail')?localStorage.getItem('uemail'):"null";
        if(email!=null)
        {
          console.log(email)
          //get user balance to check
          this.userService.getUserByEmail(email).subscribe(user=>{
            this.learner= user;
          })
        }
      }

    //check status of isLoggedin, if it's true, update learner
    this.isLoggedin.subscribe(isLoggedin_=>{
      if(isLoggedin_){
        let email=localStorage.getItem('uemail')?localStorage.getItem('uemail'):"null";
        if(email!=null)
        {
          console.log(email)
          //get user balance to check
          this.userService.getUserByEmail(email).subscribe(user=>{
            this.learner= user;
          })
        }
      }

    })

    this.isBought_();
  }


  //Checkout this course is bought by user if user loggedin
  isBought_(){

    console.log(this.course.id)
    if(!this.isLoggedin)
    {
      this.isBought= false;
    }
    else
     //check is bought
    if(this.userService.checkCourseBought(this.course.id, this.learner.id))
      this.isBought=true;
    else  this.isBought= false;
  }



  handlePriceFormat(price:number):any{
    return PriceFormat(price);
  }

  goToCourse(id: string, name:string){
    this.router.navigate(['/learning',id, name], {fragment: 'learning'} );
  }

  //Check here if user enough money, allow them to buy it, ortherwise, go to wallet page
  goToWallet(){
    if(this.isLoggedin)
      {
        
        let email=localStorage.getItem('uemail')?localStorage.getItem('uemail'):"null";
        if(email!=null)
        {
          console.log(email)
          //get user balance to check
          this.userService.getUserByEmail(email).subscribe(user=>
            {
              if(user.balance <this.course.price)
              {
                // console.log(this.userService.getUserByEmail(email).email)
                //TODO: show alert to announce

                this.actionToAlert="Your balance";
                this.message="The amount in your balance is not enough to buy this course? Go to the wallet page to top up your account."
                this.showInform=true;
                this.action="wallet"
              }
              else{
                //TODO: show alert to announce
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

  //Close alert
  closeHandler(){
    this.showInform= false;
  }

  /*Check action click, if user click "Your balance", navigate to 
  wallet page else implement to buy the course */
  implementAction(gotowallet:boolean){

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
            
            //TODO: Inform that payment success
            this.isBought=true;
            alert("Now you can learn this course");
            // this.action="success_payment";
            // this.actionToAlert=""
            // this.message="Now you can learn this course."
            // this.showInform= true;
            console.log(this.showInform)
          } 
          
        })
        
      }
      
    }
  }

}
function Of(arg0: boolean): Observable<boolean> {
  throw new Error('Function not implemented.');
}

