import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Upload } from 'src/app/models/file-upload';
import { ModifyType } from 'src/app/models/ModifyType';
import { Section } from 'src/app/models/section.model';
import { VideoType } from 'src/app/models/VideoType.model';
import { FullCourseService } from '../full-course.service';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css'],
})
export class CourseSectionComponent implements OnInit {
  @Input() section: Section = new Section('Thanh', []);
  sectionId="hhddd"
  urlVideo = '../';
  files?: File;
  closeResult: string = '';
  fileToUpLoad: File = new File([], 'hinh-a');
  constructor(private modalService: NgbModal,
              private fullCourseService: FullCourseService) {}
  ngOnInit(): void {
  }

  onEditLession(id:string) {
    this.fullCourseService.setSelection(id, VideoType.lession, ModifyType.edit);
    this.fullCourseService.onEditContent();
  }
  onEditSection(){
    this.fullCourseService.setSelection(this.sectionId, VideoType.section, ModifyType.edit);
    this.fullCourseService.onEditContent();
  }
  onDeleteLession(id:string){
    this.fullCourseService
    .setSelection(id, VideoType.lession, ModifyType.delete);
    this.fullCourseService.onDeleteContent();
  }
  onDeleteSection(){
    this.fullCourseService.setSelection(this.sectionId, VideoType.lession, ModifyType.delete);
    this.fullCourseService.onDeleteContent();
  }
  onCreateLession(){
    //handle something
    this.fullCourseService.setSelection("", VideoType.lession, ModifyType.new);
    this.fullCourseService.onEditContent();
  }
  onUpSection(){
    
  }
  onDownSection(){
    
  }
  onUpLession(id:string){
    
  }
  onDownLession(id:string){
      
  }
  onDeleteCourse(){
    
  }
  handleFileInput(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log('FileUpload -> files', fileList);

      this.fileToUpLoad = <File>fileList.item(0);
      var reader = new FileReader();
      //update Image to UI
      reader.onload = (event: any) => {
        this.urlVideo = event.target.result;
      };

      reader.readAsDataURL(this.fileToUpLoad);
    }
  }
  
}
