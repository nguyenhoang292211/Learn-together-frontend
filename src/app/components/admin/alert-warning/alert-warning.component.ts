import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-warning',
  templateUrl: './alert-warning.component.html',
  styleUrls: ['./alert-warning.component.css']
})
export class AlertWarningComponent implements OnInit {

  @Input() message: string = "hi";
  @Input() actionToAlert: string = "A";
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
