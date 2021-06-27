import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-small-course',
  templateUrl: './small-course.component.html',
  styleUrls: ['./small-course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SmallCourseComponent implements OnInit {

  @Input()  course = new Course();
  constructor() { }

  ngOnInit(): void {
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

}
