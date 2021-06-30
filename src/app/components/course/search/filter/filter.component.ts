import { Component, OnInit } from '@angular/core';
import { CategoryFilter } from 'src/app/models/categoryFilter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  listFilter = [CategoryFilter[CategoryFilter.Theory], 
  CategoryFilter[CategoryFilter.ExaminationSolving], CategoryFilter[CategoryFilter.Test]];
  constructor() { }

  ngOnInit(): void {
  }

}
