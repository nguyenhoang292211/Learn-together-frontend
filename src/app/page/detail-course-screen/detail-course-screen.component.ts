import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/components/course/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-detail-course-screen',
  templateUrl: './detail-course-screen.component.html',
  styleUrls: ['./detail-course-screen.component.css']
})
export class DetailCourseScreenComponent implements OnInit {

  selectedCourse = new Course;

  constructor(private service: CourseService) { }

  ngOnInit(): void {
   this.service.getCourseById(1).subscribe(course =>  this.selectedCourse= course);
  }

}
