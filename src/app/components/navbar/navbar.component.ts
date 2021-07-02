import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {

  titleSearch: string = "";

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  refreshComponent(){
    this.router.navigate([this.router.url])
 }

  onLoadSearch(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['search'], {queryParams: {title: this.titleSearch }, fragment: 'loading'});
   
  }


  
}
