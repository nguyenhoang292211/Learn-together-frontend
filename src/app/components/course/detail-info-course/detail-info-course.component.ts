import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-detail-info-course',
  templateUrl: './detail-info-course.component.html',
  styleUrls: ['./detail-info-course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailInfoCourseComponent implements OnInit {

  @Input() target_course = new Course();
  
  lectureCount:number=0;
  studentJoined: number=0;

  constructor(public courseService: CourseService) { }

  ngOnInit(): void {

    //this.getStudentJoinedNumber();
    // this.getLectureByCourseId();

  }


  getStudentJoinedNumber(){
    this.courseService.getstudentJoinedNumber(this.target_course.id).subscribe(
      enrollments=>{
        this.studentJoined= enrollments.length;
      }
    )
  }

  getLectureByCourseId(){
    // this.courseService.getLectureByCourseId(this.target_course.id)
    // .subscribe(lectures=>{
    //   this.lectureCount= lectures.length;
    // })
    this.lectureCount= 20;
  }


}
