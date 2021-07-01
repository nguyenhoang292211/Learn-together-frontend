import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-screen',
  templateUrl: './wallet-screen.component.html',
  styleUrls: ['./wallet-screen.component.css']
})
export class WalletScreenComponent implements OnInit {

  isHiden: boolean= true;
  constructor() { }

  ngOnInit(): void {
  }

}
