import { Component, OnInit } from '@angular/core';
import { Lecturer } from 'src/app/models/lecturer.model';

@Component({
  selector: 'app-table-lecturer',
  templateUrl: './table-lecturer.component.html',
  styleUrls: ['./table-lecturer.component.css']
})
export class TableLecturerComponent implements OnInit {

  listLecture: Lecturer[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  isPaging(){
    if (this.listLecture.length > 9)
      return true;
    return false;
  }
}
