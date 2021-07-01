import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { FullCourseService } from 'src/app/components/course/full-course/full-course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-lecturer-home-screen',
  templateUrl: './lecturer-home-screen.component.html',
  styleUrls: ['./lecturer-home-screen.component.css']
})
export class LecturerHomeScreenComponent implements OnInit {
  courses?:Course[];
  constructor(private coursesService:CourseService ) { }

  ngOnInit(): void {
  this.courses=   this.coursesService.getCourses();
  }

}
