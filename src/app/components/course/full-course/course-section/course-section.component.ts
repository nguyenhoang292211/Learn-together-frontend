import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Upload } from 'src/app/models/file-upload';
import { Section } from 'src/app/models/section.model';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css'],
})
export class CourseSectionComponent implements OnInit {
  @Input() section: Section = new Section('Thanh', []);
  urlVideo = '../';
  files?: File;
  closeResult: string = '';
  fileToUpLoad: File = new File([], 'hinh-a');
  constructor(private modalService: NgbModal) {}
  ngOnInit(): void {}

  onEditLession() {}

  openXl(content: any) {
    this.modalService.open(content, { centered: true });
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
