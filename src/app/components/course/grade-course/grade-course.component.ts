import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { levelGrade } from 'src/app/models/levelGrade';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-grade-course',
  templateUrl: './grade-course.component.html',
  styleUrls: ['./grade-course.component.css']
})
export class GradeCourseComponent implements OnInit {

  @Input() grade:levelGrade=levelGrade.grade10;
  smallCourses:Course[]=[];
  constructor(private CourseService:CourseService) { }

  ngOnInit(): void {
    this.CourseService.getListCourseGrade(this.grade).subscribe(course=> this.smallCourses= course);
  }

  getLevelGradeName():any{
    return levelGrade[this.grade];
  }


}
