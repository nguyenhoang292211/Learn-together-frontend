import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-detail-course-screen',
  templateUrl: './detail-course-screen.component.html',
  styleUrls: ['./detail-course-screen.component.css']
})
export class DetailCourseScreenComponent implements OnInit {

  
  selectedCourse = new Course;

  constructor(
    private service: CourseService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
   
  //   const id= Number(this.route.snapshot.paramMap.get('id'));
  //  this.service.getCourseById(id).subscribe(course =>  this.selectedCourse= course);
  }

}
