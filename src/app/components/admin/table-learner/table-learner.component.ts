import { Component, OnInit } from '@angular/core';
import { learner } from 'src/app/models/learner.model';

@Component({
  selector: 'app-table-learner',
  templateUrl: './table-learner.component.html',
  styleUrls: ['./table-learner.component.css']
})
export class TableLearnerComponent implements OnInit {

  listLearner: learner[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  isPaging(){
    if (this.listLearner.length > 9)
      return true;
    return false;
  }
}
