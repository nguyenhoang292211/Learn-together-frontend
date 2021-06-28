import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-detail-info-course',
  templateUrl: './detail-info-course.component.html',
  styleUrls: ['./detail-info-course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DetailInfoCourseComponent implements OnInit {

  @Input() target_course = new Course();
  constructor() { }

  ngOnInit(): void {
  }

}
