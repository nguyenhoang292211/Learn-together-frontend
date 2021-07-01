import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FullCourseService } from 'src/app/components/course/full-course/full-course.service';
import { Upload } from 'src/app/models/file-upload';
import { Section } from 'src/app/models/section.model';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  // currentUpload?:Upload;
  // dopzoneActive:boolean=false;
  // closeResult!: string;

  //constructor(private modalService: NgbModal) {}
  sections: Section[]= [];
  
  constructor(private sectionCourseService: FullCourseService){

  }
  ngOnInit(): void {
   this.sections= this.sectionCourseService.getLessionCourse();
  }
  // dropzoneState($event:boolean){
  //   this.dopzoneActive=$event;
  // }
  // openXl(content:any) {
  //   this.modalService.open(content, { size: 'xl' });
  // }

  // handleDrop(fileList:FileList){
    
  // }

}
