import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { PriceFormat } from 'src/app/util/priceformat';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table-wallet-admin',
  templateUrl: './table-wallet-admin.component.html',
  styleUrls: ['./table-wallet-admin.component.css']
})
export class TableWalletAdminComponent implements OnInit {

  message_view_img: string = "Show image deposit !";
  path_img_view:string = "../../../../../assets/images/ck.jpg";
  isViewImg:boolean = false;
  @Input() isAdmin:boolean= true;
  isCallAlert = false;
  nameActionToAlert: string = "";
  messageToAction: string = "";
  isAcceptAction: boolean = false;
  userCurrentRow: string = "";
  isExist: boolean = true;
  colorSlideFilter: ThemePalette = 'primary';
  content_for_search: string = "Find deposit by course name or email learner";
  @Input() getCourseByTitleSearch = new EventEmitter<string>();
  constructor(public userService: UserService, private _snackBar: MatSnackBar) { 

   }

   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
  }

  // searchDeposit($event: eny){
  //   this.getCourseByTitleSearch.emit.
  // }

  setUpdateStatusForRowUser(){
    if(this.isAcceptAction)
      this.isExist = false;
  }

  
  getAcceptFromAlert($event: any){
    this.isAcceptAction = $event;
    if(this.isAcceptAction) this.updateStatusUser();
    
    
  }


  setActionConfirm(){ //when click btn confirm
    this.setMessageToAlert("Do you want CONFIRM this user !", "Confirm");

  }

  setActionDeny(){ //when click btn deny
    this.setMessageToAlert("Do you want DENY this user !", "Deny");
  }

  updateStatusUser(){
    // confirm or deny
    this.openSnackBar("Reposit was updated !", "Dance");
    this.setUpdateStatusForRowUser();

  }

  getUserId(id: string){ // when choose the row
      this.userCurrentRow = id;
      console.log("userid: " + id);
  }


  setMessageToAlert(message: string, nameAction: string){ //nameAction is mean name button submit
    this.messageToAction = message;
    this.nameActionToAlert = nameAction;
    this.isCallAlert = true;
  }

  isPaging(){
    return false;
  }

  isShowImg(){
    return this.isViewImg;
  }

  onHandleError(){
    this.isCallAlert = false;
    this.isViewImg = false;
  }

  showImg(){
    this.isViewImg = true;
  }
}
