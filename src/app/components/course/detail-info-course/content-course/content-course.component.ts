import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.component.html',
  styleUrls: ['./content-course.component.css']
})
export class ContentCourseComponent implements OnInit {

  @Input() current_course = new Course();

  //Example
  listSection: number[] =[];

  constructor() { }

  ngOnInit(): void {
    this.getListSection();
  }

  //Get list section of  current course
  getListSection():number[]{
    this.listSection=[1,2,3,4];
    return this.listSection;
  }

}
