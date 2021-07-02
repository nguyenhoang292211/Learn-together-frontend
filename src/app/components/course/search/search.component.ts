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

  listCourse: Course[] = [];
  titleSearch: string = "";
  grade: number =0;
  category: number = 0;
  isUseFilter: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) {

   }

  ngOnInit(): void {
    this.getTitleFormRouter();
    this.getListSearch();
    this.getListCourseFilter();
  }

  getListSearch(){
    if(this.titleSearch)
    {
      this.courseService.getListCourseByTitle(this.titleSearch).subscribe(list => this.listCourse = list);
      this.isUseFilter = false;
    }
    else
      if(this.listCourse.length === 0) this.isUseFilter = true;
   
  }

  getTitleFormRouter(){ //use the title for search
    this.route.queryParams
    .subscribe(
      (queryParams: Params) => {
        this.titleSearch = queryParams['title'];
      
      }
    );
  }

  getFormFilterRouter(){ // if change router we use filter for search
    this.route.queryParams
    .subscribe(
      (queryParams: Params) => {
        this.grade = queryParams['grade'];
        this.category = queryParams['type'];
      }
    );
  }


  refreshComponent(){
    this.router.navigate([this.router.url])
 }

 receiveGrade($event: any){
  this.grade = $event;
}

receiveCategory($event: any){
 
  this.category = $event;
  this.reloadRouter();   //end choose filter for search
  this.getListCourseFilter(); // get list by filter
}

getListCourseFilter(){
  if(this.isUseFilter)
  { 
    this.getFormFilterRouter();
  this.courseService.getListCourseFilter(this.category, this.grade).subscribe(list => this.listCourse = list);
  }
  
}

reloadRouter(){
  // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //   this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['search'], {queryParams: {type: this.category, grade: this.grade }, fragment: 'filter'});
}

isFindList(){
    if(this.listCourse.length === 0)
      return false;
    return true;
}

}
