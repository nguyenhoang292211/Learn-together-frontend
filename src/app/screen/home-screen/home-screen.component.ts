import { Component, OnInit } from '@angular/core';
import { GRADES } from 'src/app/models/grades';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  grade10:GRADES =GRADES.GRADE10;
  grade11:GRADES= GRADES.GRADE11;
  grade12:GRADES= GRADES.GRADE12;
  constructor() { }

  ngOnInit(): void {

    
    
  }

}
