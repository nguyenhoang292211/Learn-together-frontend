import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { Section } from 'src/app/models/section.model';
import { CourseService } from 'src/app/service/course.service';
@Component({
  selector: 'app-content-course',
  templateUrl: './content-course.component.html',
  styleUrls: ['./content-course.component.css']
})
export class ContentCourseComponent implements OnInit {

  @Input() current_course = new Course();
   fragment: any;

  //Example
  listSection: Section[] =[];

  constructor(
    private courseService: CourseService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {

    console.log('content:' + this.current_course)
    this.router.fragment.subscribe(
      frag=> {
        this.fragment=frag;

      }
    );
    this.getListSection();
  }

  //Get list section of  current course
  getListSection(){
    this.listSection=this.courseService.getSectionByCourseId(this.current_course.id);
    
    //TODO: OPEN COMMAND WHEN HAVE API
    // this.courseService.getSectionByCourseId(this.current_course.id).subscribe(sections=>
    //    this.listSection= sections
    //   )
  }

}
