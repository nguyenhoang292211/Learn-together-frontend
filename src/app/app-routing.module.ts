import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { EditCourseComponent } from './page/lecturer/edit-course/edit-course.component';
import { LecturerHomeScreenComponent } from './page/lecturer/lecturer-home-screen/lecturer-home-screen.component';

import { CourseLearningScreenComponent } from './page/course-learning-screen/course-learning-screen.component';
import { DetailCourseScreenComponent } from './page/detail-course-screen/detail-course-screen.component';

import { WalletScreenComponent } from './page/wallet-screen/wallet-screen.component';


const routes: Routes = [
  
 
  {
    path: 'detail-course',
    component: DetailCourseScreenComponent,
  },
  {
    path: 'learning',
    component: CourseLearningScreenComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'wallet',
    component: WalletScreenComponent,
  },
  { path: 'lecturer', component: LecturerHomeScreenComponent },
  { path: 'edit', component: EditCourseComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
