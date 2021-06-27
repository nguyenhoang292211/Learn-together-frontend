import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeCourseComponent } from './components/course/grade-course/grade-course.component';
import { SmallCourseComponent } from './components/course/small-course/small-course.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginScreenComponent } from './page/login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    GradeCourseComponent,
    SmallCourseComponent,
    HomeScreenComponent,
    NavbarComponent,
    FooterComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
