import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-wallet-coins',
  templateUrl: './admin-wallet-coins.component.html',
  styleUrls: ['./admin-wallet-coins.component.css']
})
export class AdminWalletCoinsComponent implements OnInit {

  isShowTheSentCoins = false;
  constructor() { }

  ngOnInit(): void {
  }

  chooseShowFormSentCoins(){
    this.isShowTheSentCoins = true;
  }

  showFormSentCoins(){
    if(this.isShowTheSentCoins)
      this.isShowTheSentCoins = false;
    else
      return this.isShowTheSentCoins;
    return !this.isShowTheSentCoins;
  }
}
