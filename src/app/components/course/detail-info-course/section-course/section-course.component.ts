import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-section-course',
  templateUrl: './section-course.component.html',
  styleUrls: ['./section-course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SectionCourseComponent implements OnInit {

  @Input() section :number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
