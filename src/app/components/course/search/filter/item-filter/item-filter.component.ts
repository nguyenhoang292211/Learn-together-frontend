import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';
import { GRADES } from 'src/app/models/grades';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemFilterComponent implements OnInit {

  @Output() sendGradeChoose = new EventEmitter<number>();
  @Output() sendCategoryChoose = new EventEmitter<number>();
  @Input() category :number=0; //enum category
  @Input() filterCategory: string = "Test"; // name category
  listFilterOfCategory = [GRADES.GRADE12,GRADES.GRADE11, GRADES.GRADE10];
  categoryChoose: Number = 0;
  grade: number = 12;
  constructor() { 
   
   
  }

  ngOnInit(): void {
  }

  change(grade: number){
    this.grade = grade;
    console.log(this.grade);
    this.sendGradeChoose.emit(this.grade);
    this.sendCategoryChoose.emit(this.category);
  }


}
