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
import { CourseLearningScreenComponent } from './page/course-learning-screen/course-learning-screen.component';
import { CommentComponent } from './components/comment/comment/comment.component';
import { SingleCommentComponent } from './components/comment/single-comment/single-comment.component';
import { WalletScreenComponent } from './page/wallet-screen/wallet-screen.component';

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
    CourseLearningScreenComponent,
    CommentComponent,
    SingleCommentComponent,
    WalletScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
