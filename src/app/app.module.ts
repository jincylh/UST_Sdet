import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AlertComponent } from './alert.component';
// import { AppComponent } from './app.component';
// import { BadgeComponent } from './badge.component';
// import { CardComponent } from './card/card.component';
// import { TableComponent } from './table/table.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { ViewUniversitiesComponent } from './view-universities/view-universities.component';

import { HttpClientModule } from '@angular/common/http';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';


@NgModule({
  declarations: [
    // AppComponent, BadgeComponent, CardComponent, TableComponent, AlertComponent, NavbarComponent, 
    // ViewUniversitiesComponent,
     ViewCoursesComponent,
    AddCoursesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [ViewCoursesComponent]
  
})
export class AppModule { }
