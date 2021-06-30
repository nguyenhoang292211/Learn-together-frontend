import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wallet-coins',
  templateUrl: './admin-wallet-coins.component.html',
  styleUrls: ['./admin-wallet-coins.component.css']
})
export class AdminWalletCoinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showFormSentCoins(){
    return false;
  }
}
