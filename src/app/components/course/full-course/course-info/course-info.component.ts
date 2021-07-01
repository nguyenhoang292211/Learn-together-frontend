import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {
  @Input() lessionInfo={
    name:'Primities0',
    description:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s0',
    price:'030000',
    url:'../../../assets/images/img1.jpg'
  }
  @ViewChild('infoCourse', { read: NgForm }) infoCourse!: any;
  fileToUpLoad:File  =new File([],"hinh-a"); 
  constructor() { }

  ngOnInit(): void {
  }
  handleFileInput(event:Event){

    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      console.log("FileUpload -> files", fileList);

      this.fileToUpLoad= <File>fileList.item(0);
    var reader= new FileReader();
    //update Image to UI
    reader.onload= (event:any)=>{
      this.lessionInfo.url= event.target.result;
    }
    reader.readAsDataURL(this.fileToUpLoad)
    }
  }
  btnDelete(){
    console.log(this.infoCourse.value);
  }
  
}
