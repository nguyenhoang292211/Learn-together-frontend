import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FullCourseService } from 'src/app/components/course/full-course/full-course.service';
import { Upload } from 'src/app/models/file-upload';
import { ElementRef, ViewChild } from '@angular/core';
import { Section } from 'src/app/models/section.model';
import { Lession } from 'src/app/models/lession.model';
import { VideoType } from 'src/app/models/VideoType.model';
import { ModifyType } from 'src/app/models/ModifyType';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
})
export class EditCourseComponent implements OnInit {
  @ViewChild('content', { static: true }) content?: ElementRef;
  sections: Section[] = [];
  // closeResult: string;
  wayModify:ModifyType=ModifyType.edit;
  sectionCurrent= new Section("",[]);
  lessionCurrent= new Lession("","");
  typeSelection= VideoType.lession;
  fileToUpLoad: File = new File([], 'hinh-a');
  urlVideo = '../';
  constructor(
    private modalService: NgbModal,
    private fullCourseService: FullCourseService
  ) {}
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
  openVerticallyCentered() {
    if (this.fullCourseService.getCurrentSelection()==VideoType.lession){
      this.updateState();
        this.lessionCurrent= this.fullCourseService.getLessionSelection();
    }else{
        this.updateState();
      this.sectionCurrent= this.fullCourseService.getSectionSelection();
    }
    this.modalService.open(this.content, { centered: true, size:'lg' });
  }

  ngOnInit(): void {
    this.sections = this.fullCourseService.getLessionCourse();
    
    //
    if (this.fullCourseService.subsEdit == null) {
      this.fullCourseService.subsEdit =
        this.fullCourseService.invokeEditModal.subscribe((content: any) => {
          this.openVerticallyCentered();
        });
    }
    if (this.fullCourseService.subsDelete == null) {
      this.fullCourseService.subsDelete =
        this.fullCourseService.invokeDeleteModal.subscribe((content: any) => {
          this.openVerticallyCentered();
        });
    }
  }
  updateState(){
      this.typeSelection=this.fullCourseService.getCurrentSelection();
      this.wayModify= this.fullCourseService.getWayModify();
      
      if(this.typeSelection== VideoType.lession){
          this.lessionCurrent= this.fullCourseService.getLessionSelection();
      }
      else{
        this.sectionCurrent= this.fullCourseService.getSectionSelection();
      }
  }
}
