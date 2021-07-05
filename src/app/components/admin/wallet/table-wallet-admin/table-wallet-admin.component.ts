import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';
import { PriceFormat } from 'src/app/util/priceformat';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepositRequest } from 'src/app/models/deposit-request.model';
import { DepositRequestService } from 'src/app/service/deposit-request.service';
import { STATUSES } from 'src/app/models/statuses';

const enum action {
  CONFIRMED,
  DENIED
}

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
  depositCurrentRow: DepositRequest = new DepositRequest();
  colorSlideFilter: ThemePalette = 'primary';
  content_for_search: string = "Find deposit by learner name or learner email";
  typeOfAction: action = action.CONFIRMED;
  newStatusDeposit: STATUSES = STATUSES.CONFIRM;
  @Input() getTitleSearch = new EventEmitter<string>();
  depositRequests: DepositRequest[] = [];
  isConfirmAll: boolean = false;
  constructor(public userService: UserService, private _snackBar: MatSnackBar, 
    public depositRequestService: DepositRequestService) { 

   }

   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
    this.getAllList();
  }


  setIsConfirmAll(){
    
    this.isConfirmAll = !this.isConfirmAll;
    if(this.isConfirmAll) this.getListNotYetConfirm();
    else this.getAllList();
  }

  getListNotYetConfirm(){
    this.depositRequestService.getAllNotYetConfirm().subscribe(depositRequest => this.depositRequests = depositRequest);
  }

  getAllList(){
    this.depositRequestService.getAll().subscribe(depositRequest => this.depositRequests = depositRequest);
  }

  searchDeposit($event: any){
    this.getTitleSearch.emit($event);
    //get search
  }

  
  getAcceptFromAlert($event: any){
    this.isAcceptAction = $event;
    if(this.isAcceptAction) this.updateStatusDeposit();
    
    
  }


  setActionConfirm(){ //when click btn confirm
    this.setMessageToAlert("Do you want CONFIRM this user !", "Confirm");
    this.newStatusDeposit = STATUSES.CONFIRM;

  }

  setActionDeny(){ //when click btn deny
    this.setMessageToAlert("Do you want DENY this user !", "Deny");
    this.newStatusDeposit = STATUSES.DENIED;
  }

  updateStatusDeposit(){
    // confirm or deny 
    // get deposit current for update
    this.depositRequestService.updateStatus(this.depositCurrentRow, this.newStatusDeposit);
    this.openSnackBar("Reposit was updated !", "OK");

  }

  getDepositCurrentRow(item: DepositRequest){
    this.depositCurrentRow = item;
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
