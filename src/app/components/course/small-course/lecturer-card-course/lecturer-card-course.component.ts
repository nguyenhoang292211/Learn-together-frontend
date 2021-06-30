import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-lecturer-card-course',
  templateUrl: './lecturer-card-course.component.html',
  styleUrls: ['./lecturer-card-course.component.css']
})
export class LecturerCardCourseComponent implements OnInit {
  @Input() course:Course= new Course();
 
  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
  }
  onEditCourse(){
   // this.router.navigate(['edit'],{relativeTo:this.route})
    this.router.navigate(['../','edit'],{relativeTo:this.route})
  }

}
