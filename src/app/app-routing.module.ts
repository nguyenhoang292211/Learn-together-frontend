import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseLearningScreenComponent } from './page/course-learning-screen/course-learning-screen.component';
import { DetailCourseScreenComponent } from './page/detail-course-screen/detail-course-screen.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { WalletScreenComponent } from './page/wallet-screen/wallet-screen.component';

const routes: Routes = [
  {
    path: 'detail-course', component: DetailCourseScreenComponent
  },
  {
    path:'learning', component: CourseLearningScreenComponent
  },
  {
    path:'home', component:HomeScreenComponent
  },
  {
    path:'', redirectTo:'/home', pathMatch:'full'
  },
  {
    path:'wallet', component:WalletScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
