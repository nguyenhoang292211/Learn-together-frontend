import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-admin-wallet',
  templateUrl: './table-admin-wallet.component.html',
  styleUrls: ['./table-admin-wallet.component.css']
})
export class TableAdminWalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isPaging(){
    return false;
  }

}
