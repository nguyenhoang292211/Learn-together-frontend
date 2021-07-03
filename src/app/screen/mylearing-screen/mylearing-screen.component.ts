import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { User } from 'src/app/models/user.model';
import { CourseService } from 'src/app/service/course.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-mylearing-screen',
  templateUrl: './mylearing-screen.component.html',
  styleUrls: ['./mylearing-screen.component.css']
})
export class MylearingScreenComponent implements OnInit {

  myCourseList:Course[]=[];
  learner = new User();

  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getMyCourses();
  }

  getMyCourses(){
    this.learner= this.userService.getUserInLocalStore();
    this.courseService.getMyCourses(this.learner.id).subscribe(courses=>this.myCourseList= courses)
  }

}
