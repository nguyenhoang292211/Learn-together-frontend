import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeCourseComponent } from './components/course/grade-course/grade-course.component';
import { SmallCourseComponent } from './components/course/small-course/small-course.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginScreenComponent } from './page/login-screen/login-screen.component';
import { DetailCourseScreenComponent } from './page/detail-course-screen/detail-course-screen.component';
import { DetailInfoCourseComponent } from './components/course/detail-info-course/detail-info-course.component';
import { CardImageComponent } from './components/course/detail-info-course/card-image/card-image.component';
import { SectionCourseComponent } from './components/course/detail-info-course/section-course/section-course.component';
import { ContentCourseComponent } from './components/course/detail-info-course/content-course/content-course.component';
import { LecturerHomeScreenComponent } from './page/lecturer/lecturer-home-screen/lecturer-home-screen.component';
import { LecturerCardCourseComponent } from './components/course/small-course/lecturer-card-course/lecturer-card-course.component';
import { EditCourseComponent } from './page/lecturer/edit-course/edit-course.component';
import { CourseInfoComponent } from './components/course/full-course/course-info/course-info.component';
import { CourseSectionComponent } from './components/course/full-course/course-section/course-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UploadTaskComponent } from './components/course/full-course/course-section/upload-task/upload-task.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/course/search/search.component';
import { ItemSearchComponent } from './components/course/search/item-search/item-search.component';
import { ListSearchComponent } from './components/course/search/list-search/list-search.component';
import { FilterComponent } from './components/course/search/filter/filter.component';
import { ItemFilterComponent } from './components/course/search/filter/item-filter/item-filter.component';
import { AdminComponent } from './components/admin/admin.component';
import { TableLearnerComponent } from './components/admin/table-learner/table-learner.component';

import { CourseLearningScreenComponent } from './page/course-learning-screen/course-learning-screen.component';
import { CommentComponent } from './components/comment/comment/comment.component';
import { SingleCommentComponent } from './components/comment/single-comment/single-comment.component';
import { WalletScreenComponent } from './page/wallet-screen/wallet-screen.component';
import { TableLecturerComponent } from './components/admin/table-lecturer/table-lecturer.component';
import { TableLearnerPaymentComponent } from './components/admin/table-learner-payment/table-learner-payment.component';
import { TableAdminWalletComponent } from './components/admin/table-admin-wallet/table-admin-wallet.component';
import { AdminWalletScreenComponent } from './components/admin/admin-wallet-screen/admin-wallet-screen.component';
import { AdminWalletCoinsComponent } from './components/admin/admin-wallet-coins/admin-wallet-coins.component';
import { FormSendCoinsComponent } from './components/admin/form-send-coins/form-send-coins.component';
import { AlertComponent } from './components/admin/table-learner-payment/alert/alert.component';
import { WalletComponent } from './components/admin/wallet/wallet.component';
import { TableWalletAdminComponent } from './components/admin/wallet/table-wallet-admin/table-wallet-admin.component';
import { BalanceWalletAdminComponent } from './components/admin/wallet/balance-wallet-admin/balance-wallet-admin.component';
import { AlertViewImageComponent } from './components/admin/wallet/alert-view-image/alert-view-image.component';
import { SocialLoginModule } from 'angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    GradeCourseComponent,
    SmallCourseComponent,
    HomeScreenComponent,
    NavbarComponent,
    FooterComponent,
    LoginScreenComponent,
    DetailCourseScreenComponent,
    DetailInfoCourseComponent,
    CardImageComponent,
    SectionCourseComponent,
    ContentCourseComponent,
    LecturerHomeScreenComponent,
    LecturerCardCourseComponent,
    EditCourseComponent,
    CourseInfoComponent,
    CourseSectionComponent,
    
    UploadTaskComponent,
   
    SearchComponent,
    ItemSearchComponent,
    ListSearchComponent,
    FilterComponent,
    ItemFilterComponent,
    AdminComponent,
    TableLearnerComponent,
    CourseLearningScreenComponent,
    CommentComponent,
    SingleCommentComponent,
    WalletScreenComponent,
    TableLecturerComponent,
    TableLearnerPaymentComponent,
    TableAdminWalletComponent,
    AdminWalletScreenComponent,
    AdminWalletCoinsComponent,
    FormSendCoinsComponent,
    AlertComponent,
    WalletComponent,
    TableWalletAdminComponent,
    BalanceWalletAdminComponent,
    AlertViewImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    NgbModule, 
    FormsModule,
    SocialLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
