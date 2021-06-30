import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { EditCourseComponent } from './page/lecturer/edit-course/edit-course.component';
import { LecturerHomeScreenComponent } from './page/lecturer/lecturer-home-screen/lecturer-home-screen.component';


const routes: Routes = [
  {path:'', component:HomeScreenComponent},
  {path:'lecturer', component:LecturerHomeScreenComponent},
  {path:'edit', component:EditCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
