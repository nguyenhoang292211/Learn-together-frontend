import { Component, Input, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import * as EventEmitter from 'events';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

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
  
  constructor(public userCurrentRow: User, userService: UserService) { 

   }

  ngOnInit(): void {
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
