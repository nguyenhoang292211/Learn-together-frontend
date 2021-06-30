import { Component, OnInit } from '@angular/core';
import { learner } from 'src/app/models/learner.model';
@Component({
  selector: 'app-table-learner-payment',
  templateUrl: './table-learner-payment.component.html',
  styleUrls: ['./table-learner-payment.component.css']
})
export class TableLearnerPaymentComponent implements OnInit {

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
