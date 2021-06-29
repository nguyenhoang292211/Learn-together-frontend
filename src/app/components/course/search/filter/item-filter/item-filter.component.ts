import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
import { levelGrade } from 'src/app/models/levelGrade';

@Component({
  selector: 'app-item-filter',
  templateUrl: './item-filter.component.html',
  styleUrls: ['./item-filter.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ItemFilterComponent implements OnInit {

  @Input() category :number=0; //enum category
  @Input() filterCategory: string = "Test"; // name category
  listFilterOfCategory = [levelGrade[levelGrade.grade10], levelGrade[levelGrade.grade11], levelGrade[levelGrade.grade12],
  levelGrade[levelGrade.hotestgrade]];
 
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
