import { Component, Output, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { CategoryFilter } from 'src/app/models/categoryFilter';
import { ItemFilterComponent } from './item-filter/item-filter.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  @ViewChild(ItemFilterComponent) filter: any;
  @Output() sendGradeChoose = new EventEmitter<number>();
  @Output() sendCategoryChoose = new EventEmitter<number>();
  grade: number = 0;
  category: number = 0;
  listFilter = [CategoryFilter[CategoryFilter.Theory], 
  CategoryFilter[CategoryFilter.ExaminationSolving], CategoryFilter[CategoryFilter.Test]];
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // this.grade = this.filter.grade;
  }

  receiveGrade($event: any){
    this.grade = $event;
    console.log("qua con:" + this.grade);
    this.sendGradeChoose.emit(this.grade);
  }

  receiveCategory($event: any){
    this.category = $event;
    console.log("qua con:" + this.category);
    this.sendCategoryChoose.emit($event);
  }
 
}
