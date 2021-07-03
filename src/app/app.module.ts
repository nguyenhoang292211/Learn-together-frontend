import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeCourseComponent } from './components/course/grade-course/grade-course.component';
import { SmallCourseComponent } from './components/course/small-course/small-course.component';
import { HomeScreenComponent } from './screen/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginScreenComponent } from './screen/login-screen/login-screen.component';
import { CourseDetailScreenComponent } from './screen/course-detail-screen/course-detail-screen.component';
import { DetailInfoCourseComponent } from './components/course/detail-info-course/detail-info-course.component';
import { CardImageComponent } from './components/course/detail-info-course/card-image/card-image.component';
import { SectionCourseComponent } from './components/course/detail-info-course/section-course/section-course.component';
import { ContentCourseComponent } from './components/course/detail-info-course/content-course/content-course.component';
import { LecturerHomeScreenComponent } from './screen/lecturer/lecturer-home-screen/lecturer-home-screen.component';
import { LecturerCardCourseComponent } from './components/course/small-course/lecturer-card-course/lecturer-card-course.component';
import { EditCourseComponent } from './screen/lecturer/edit-course/edit-course.component';
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

import { CourseLearningScreenComponent } from './screen/course-learning-screen/course-learning-screen.component';
import { CommentComponent } from './components/comment/comment/comment.component';
import { SingleCommentComponent } from './components/comment/single-comment/single-comment.component';
import { WalletScreenComponent } from './screen/wallet-screen/wallet-screen.component';
import { WalletComponent } from './components/admin/wallet/wallet.component';
import { TableWalletAdminComponent } from './components/admin/wallet/table-wallet-admin/table-wallet-admin.component';
import { BalanceWalletAdminComponent } from './components/admin/wallet/balance-wallet-admin/balance-wallet-admin.component';
import { AlertViewImageComponent } from './components/admin/wallet/alert-view-image/alert-view-image.component';
import { LearnerWalletComponent } from './components/learner-wallet/learner-wallet.component';
import { TableWalletLearnerComponent } from './components/learner-wallet/table-wallet-learner/table-wallet-learner.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { TransferInformationComponent } from './screen/wallet-screen/transfer-information/transfer-information.component';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login'
import { ShortenPipe } from './components/course/small-course/shorten.pipe';

import { RouterModule } from '@angular/router';
import { LearnerManagermentComponent } from './components/admin/learner-managerment/learner-managerment.component';
import { TableLearnerManagermentComponent } from './components/admin/learner-managerment/table-learner-managerment/table-learner-managerment.component';
import { AlertComponent } from './components/alert/alert.component'

import {HttpClientModule} from '@angular/common/http'
import {AlertWarningComponent } from './components/admin/alert-warning/alert-warning.component';
import { MylearingScreenComponent } from './screen/mylearing-screen/mylearing-screen.component'
import {ShortenDescription} from './components/course/small-course/lecturer-card-course/shortenDescription.pipe'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { EmptyBlockComponent } from './components/empty-block/empty-block.component';
// import { TableAdminWalletComponent } from './components/admin/table-admin-wallet/table-admin-wallet.component';
// import { AdminWalletScreenComponent } from './components/admin/admin-wallet-screen/admin-wallet-screen.component';
// import { AdminWalletCoinsComponent } from './components/admin/admin-wallet-coins/admin-wallet-coins.component';

//


@NgModule({
  declarations: [
    AppComponent,
    GradeCourseComponent,
    SmallCourseComponent,
    HomeScreenComponent,
    NavbarComponent,
    FooterComponent,
    LoginScreenComponent,
    CourseDetailScreenComponent,
    DetailInfoCourseComponent,
    CardImageComponent,
    SectionCourseComponent,
    ContentCourseComponent,
    LecturerHomeScreenComponent,
    LecturerCardCourseComponent,
    EditCourseComponent,
    CourseInfoComponent,
    CourseSectionComponent,
    AlertWarningComponent,
    
    UploadTaskComponent,
   
    SearchComponent,
    ItemSearchComponent,
    ListSearchComponent,
    FilterComponent,
    ItemFilterComponent,
    AdminComponent,
    CourseLearningScreenComponent,
    CommentComponent,
    SingleCommentComponent,
    WalletScreenComponent,
    WalletComponent,
    TableWalletAdminComponent,
    BalanceWalletAdminComponent,
    AlertViewImageComponent,
    LearnerWalletComponent,
    TableWalletLearnerComponent,
    NavbarAdminComponent,
    TransferInformationComponent,
    AlertComponent,
    TransferInformationComponent,
    ShortenPipe,
    LearnerManagermentComponent,
    TableLearnerManagermentComponent,
    ListSearchComponent,
<<<<<<< HEAD
    MylearingScreenComponent,
    ShortenDescription,
    AlertWarningComponent
=======
    AlertWarningComponent,
    EmptyBlockComponent
>>>>>>> 2a28b68 (design admin)

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    NgbModule, 
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatTreeModule,
    MatIconModule, 
    MatButtonModule,
    MatRadioModule,
    MatCardModule
    
  
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '395648515110-735vd1plqjqb5bp9ihrpdq78d9ro9it7.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
