import { Component, OnInit } from '@angular/core';
import { levelGrade } from 'src/app/models/levelGrade';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  grade10:levelGrade =levelGrade.grade10;
  grade11:levelGrade= levelGrade.grade11;
  grade12:levelGrade= levelGrade.grade12;
  constructor() { }

  ngOnInit(): void {

    
    
  }

}
