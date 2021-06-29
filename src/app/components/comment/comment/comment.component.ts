import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
