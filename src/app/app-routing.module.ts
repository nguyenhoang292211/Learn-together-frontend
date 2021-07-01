import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { EditCourseComponent } from './page/lecturer/edit-course/edit-course.component';
import { LecturerHomeScreenComponent } from './page/lecturer/lecturer-home-screen/lecturer-home-screen.component';

import { CourseLearningScreenComponent } from './page/course-learning-screen/course-learning-screen.component';
import { DetailCourseScreenComponent } from './page/detail-course-screen/detail-course-screen.component';

import { LoginScreenComponent } from './page/login-screen/login-screen.component';
import { WalletScreenComponent } from './page/wallet-screen/wallet-screen.component';
import { LearnerPaymentManagermentComponent } from './components/admin/learner-payment-managerment/learner-payment-managerment.component';
import { WalletComponent } from './components/admin/wallet/wallet.component';


const routes: Routes = [
  
 
  {
    path: 'detail-course',
    component: DetailCourseScreenComponent,
  },
  {
    path:'learning/:id/:name-course', component: CourseLearningScreenComponent
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
  {
     path: 'edit', component: EditCourseComponent
  },
  {
    path: 'admin/managerment/payment', component: LearnerPaymentManagermentComponent
  },
  {
    path: 'admin/managerment/wallet', component: WalletComponent
  },
  { 
    path: 'lecturer', component: LecturerHomeScreenComponent 
  },
  { 
    path: 'edit', component: EditCourseComponent 
},
{
    path:'wallet', component:WalletScreenComponent
  },
  {
    path:'detail/:id/:name-course', component: DetailCourseScreenComponent
  },
  {
    path:'login', component: LoginScreenComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
