import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/service/course.service';
import { FilterComponent } from './filter/filter.component';
import { ItemFilterComponent } from './filter/item-filter/item-filter.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild(FilterComponent) filter: any;
  listCourse: Course[] = [];
  titleSearch: string = "";
  grade: number = 0;
  category: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {
  
   }

  ngOnInit(): void {
    console.log("on");
    this.getTitleFormRouter();
    this.getListSearch();
  }

  ngAfterViewInit(){
    console.log(this.filter.categoryr);
  }

  getListSearch(){
    this.courseService.getListCourseByTitle(this.titleSearch).subscribe(list => this.listCourse = list);
  }

  getTitleFormRouter(){
    this.route.queryParams
    .subscribe(
      (queryParams: Params) => {
        this.titleSearch = queryParams['title'];
      }
    );
    console.log("title: " + this.titleSearch);
  }

  refreshComponent(){
    this.router.navigate([this.router.url])
 }

 receiveGrade($event: any){
  this.grade = $event;
  console.log("qua cha:" + this.grade);
  
}

receiveCategory($event: any){
  this.category = $event;
  console.log("qua cha:" + this.category);
  this.getListCourseFilter();
}

getListCourseFilter(){
  this.courseService.getListCourseFilter(this.category, this.grade).subscribe(list => this.listCourse = list);
  this.reloadRouter();
}

reloadRouter(){
  // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['search'], {queryParams: {type: this.category, grade: this.grade }, fragment: 'filter'});
}

isFindList(){
    if(this.listCourse.length == 0)
      return false;
    return true;
}

}
