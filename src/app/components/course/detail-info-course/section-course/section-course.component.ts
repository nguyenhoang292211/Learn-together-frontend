import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Course } from 'src/app/models/course.model';
import { Section } from 'src/app/models/section.model';
import { CourseService } from 'src/app/service/course.service';
import { Lecture } from 'src/app/models/lecture.model';
import { Video } from 'src/app/models/video.model';

@Component({
  selector: 'app-section-course',
  templateUrl: './section-course.component.html',
  styleUrls: ['./section-course.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SectionCourseComponent implements OnInit {

  @Input() section!: Section;
  listLecture : Lecture[]=[];
  video!: Video;
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getLecturesBySectionId(this.section.id);
    console.log(this.listLecture);
    console.log(this.section.id)
  }

  //get lectures of section by section id
  getLecturesBySectionId( sectionId:string){
    this.listLecture= this.courseService.getLecturesBySectionId(sectionId);
    //TODO: OPEN COMMAND WHEN HAVE API
    // this.courseService.getLectureByCourseId(sectionId).subscribe(lectures=>
    //   this.listLecture= lectures
    //   )
  }

  //get video of lecture by lecture id
  getVideoByLectureId(lectureId: string): string{
    this.courseService.getVideoByLectureId(lectureId).subscribe(video=>
        this.video= video
    )
    //return this.video.length;
    return "1p30"
  }

}
