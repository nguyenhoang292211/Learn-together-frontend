import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  @Input() course = new Course();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  //Checkout this course is bought by user if user logined
  isBought():boolean{
    return true;
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

  goToCourse(id: number, name:string){
    this.router.navigate(['/learning',id, name]);
  }

  goToWallet(){
    this.router.navigate(['/wallet'])
  }

}
