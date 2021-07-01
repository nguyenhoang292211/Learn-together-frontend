import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { GRADES } from 'src/app/models/grades';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemFilterComponent implements OnInit {

  @Input() category :number=0; //enum category
  @Input() filterCategory: string = "Test"; // name category
  listFilterOfCategory = [GRADES[GRADES.GRADE10], GRADES[GRADES.GRADE11], GRADES[GRADES.GRADE12],
  GRADES[GRADES.hotestgrade]];
 
  constructor() { 
   
   
  }

//   ngAfterViewInit() {
//     const selected = (<HTMLElement>this.el.nativeElement)
//     .querySelector(".selected");
//     const optionsContainer = (<HTMLElement>this.el.nativeElement)
//     .querySelector(".options-container");

//     const optionsList =(<HTMLElement>this.el.nativeElement)
//     .querySelectorAll(".option");

// // this.renderer.listen(selected, 'click', () => {
// //   // alert('Buton was clicked');
// //     optionsContainer.classList.toggle("active");
// // });


//   }

  showMenu(){
   
  }

  // optionListMenu(o:  ){
  //   this.selected.innerHTML = o.querySelector("label").innerHTML;
  //   this.optionsContainer.classList.remove("active");
    
  // }

  ngOnInit(): void {
  }

//   public itemBeforeEvent (args: MenuEventArgs) {
//     args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
// }

}
