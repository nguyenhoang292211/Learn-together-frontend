import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/components/course/course.service';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-learning-screen',
  templateUrl: './course-learning-screen.component.html',
  styleUrls: ['./course-learning-screen.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CourseLearningScreenComponent implements OnInit {

  current_course = new Course();
  videoURL : any;

  constructor(
    private route: ActivatedRoute,
    private courseService:CourseService,
    private _sanitizer: DomSanitizer
    ) {

      
     }

  ngOnInit(): void {
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.videoURL= this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/zcAalMeaKso");
    this.courseService.getCourseById(id).subscribe(course => this.current_course= course);

  }

}
