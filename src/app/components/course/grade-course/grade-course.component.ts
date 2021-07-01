import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { GRADES } from 'src/app/models/grades';
import { CourseService } from 'src/app/components/course/course.service';

@Component({
  selector: 'app-grade-course',
  templateUrl: './grade-course.component.html',
  styleUrls: ['./grade-course.component.css']
})
export class GradeCourseComponent implements OnInit {

  @Input() grade:GRADES=GRADES.GRADE10;
  smallCourses:Course[]=[];
  constructor(private CourseService:CourseService) { }

  ngOnInit(): void {
    this.CourseService.getListCourseGrade(this.grade).subscribe(course=> this.smallCourses= course);
  }

  getLevelGradeName():any{
    return GRADES[this.grade];
  }


}
