import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';
import { FullCourseService } from 'src/app/components/course/full-course/full-course.service';
import { Course } from 'src/app/models/course.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-lecturer-home-screen',
  templateUrl: './lecturer-home-screen.component.html',
  styleUrls: ['./lecturer-home-screen.component.css'],
})
export class LecturerHomeScreenComponent implements OnInit {
  courses: Course[]=[];
  //Login check
  public userDetails? = Object;
  constructor(private router: Router, 
    private route:ActivatedRoute,
    private coursesService: CourseService,
    private fullCourseService : FullCourseService) {}

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
    this.fullCourseService.getCourses().subscribe((courses)=>{
      this.courses=courses;
    })
  }
  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/admin/login').then();
  }
  onCreateCourse(){
      this.router.navigate(['../','course','new'], {relativeTo:this.route})
  }
}
