import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Lession } from 'src/app/models/lession.model';
import { ModifyType } from 'src/app/models/ModifyType';
import { Section } from 'src/app/models/section.model';
import { VideoType } from 'src/app/models/VideoType.model';

@Injectable({
  providedIn: 'root',
})
export class FullCourseService {
  //================================= Data hook=========================
  private lessionsInfo = {

    name: 'Primities',
    description:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    price: '30000',
  };
  public contentCourse: Section[] = [
    new Section('Section1', [
      new Lession('Section1- Lession1', 'https://www.youtube.com/channel/'),
      new Lession('Section1- Lession2', 'https://www.youtube.com/channel/'),
    ]),
    new Section('Section2', [
      new Lession('Section2- Lession1', 'https://www.youtube.com/channel/'),
      new Lession('Section2- Lession2', 'https://www.youtube.com/channel/'),
    ]),
  ];


  //================================= Initial =========================
  //save edit Modal in screen

  idItem:string='1';
  typeSelection:VideoType=VideoType.lession;
  wayModify:ModifyType=ModifyType.new;

  invokeEditModal= new EventEmitter();
  subsEdit?:Subscription;
  
  invokeDeleteModal= new EventEmitter();
  subsDelete?:Subscription;
  constructor() {}

  //================================= Method =========================
  getLessionCourse() {
    return this.contentCourse;
  }
  getLessionInfo() {
    return this.lessionsInfo;
  }
  onEditContent(){
    this.invokeEditModal.emit();
  }
  onDeleteContent(){
    this.invokeDeleteModal.emit();
  }
  onNewLession(){
    this.invokeEditModal.emit();
  }
  onUpSection(){

  }
  onDownSection(){
    
  }
  onUpLession(){
    
  }
  onDownLession(){
    
  }
  
  setSelection(id:string, type:VideoType, way:ModifyType){
      this.idItem=id;
      this.typeSelection= type;
      this.wayModify=way;
  }
  
  getLessionSelection(){
    //TODO: update way get when have API
        return this.contentCourse[1].lessions[1];
  }
  getSectionSelection(){
    return this.contentCourse[1];
  }
  getCurrentSelection(){
    return this.typeSelection;
  }
  getWayModify(){
    return this.wayModify;
  }
}
