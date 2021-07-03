import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/service/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-detail-screen',
  templateUrl: './course-detail-screen.component.html',
  styleUrls: ['./course-detail-screen.component.css']
})
export class CourseDetailScreenComponent implements OnInit {

  
  selectedCourse = new Course;

  constructor(
    private service: CourseService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {   
    const id= this.route.snapshot.paramMap.get('id');
    if(id !=null)
    this.service.getCourseById(id).subscribe(course =>  this.selectedCourse= course);
  }

}
