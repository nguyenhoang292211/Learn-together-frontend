import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
@Component({
  selector: 'app-table-learner-payment',
  templateUrl: './table-learner-payment.component.html',
  styleUrls: ['./table-learner-payment.component.css']
})
export class TableLearnerPaymentComponent implements OnInit {

  listLearner: User[] = [];
 @ViewChild('content') content:any;
 APPROVE: string = "error";
 isChange = false;
  constructor() { }

  ngOnInit(): void {
  }

  isPaging(){
    if (this.listLearner.length > 9)
      return true;
    return false;
  }

  public open() {
    if(0){
      // Dont open the modal
 
    } else {
       // Open the modal
       this.content.open();
    }
  }

  isChooseChange(){
    this.isChange = true;
  }

  show(){
    return this.isChange;
  }

  onHandleError(){
    this.isChange = false;
  }
 
}
