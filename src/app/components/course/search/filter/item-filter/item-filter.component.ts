import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output} from '@angular/core';
import { GRADES } from 'src/app/models/grades';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface Grade {
  name: string;
  value: GRADES;
  children?: Grade[];
}

   
/** Flat node with expandable and level information */
interface FlatNodeFilterGrade {
  expandable: boolean;
  name: string;
  level: number;
  value: GRADES;
}

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
  @Input() nameFilterCategory: string = "Test"; // name category
  listFilterOfCategory = [GRADES.GRADE12,GRADES.GRADE11, GRADES.GRADE10];
  categoryChoose: Number = 0;
  grade: number = 12;
  TREE_DATA: Grade[] = [];

  private _transformer = (node: Grade, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      value: node.value
    };
  }

  constructor() { 
  
  };

  setValueForTreeData(){
    this.TREE_DATA = [
      {
        name: this.nameFilterCategory,
        value: this.category,
        children: [
          {name: 'Grade 12', value: GRADES.GRADE12},
          {name: 'Grade 11', value: GRADES.GRADE11},
          {name: 'Grade 10', value: GRADES.GRADE10},
        ]
      }
    ]
  }
  

  treeControl = new FlatTreeControl<FlatNodeFilterGrade>(
  node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    hasChild = (_: number, node: FlatNodeFilterGrade) => node.expandable;

  ngOnInit(): void {
     
    this.setValueForTreeData();
    this.dataSource.data = this.TREE_DATA;
    console.log(this.nameFilterCategory);


  }

  change(gradeIndex: number){
    this.grade = gradeIndex;
    console.log(this.grade);
    this.sendGradeChoose.emit(this.grade);
    this.sendCategoryChoose.emit(this.category);
  }


}
