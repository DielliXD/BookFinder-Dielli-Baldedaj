import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BookInfoComponent } from './book-info/book-info.component'; 

@NgModule({
  declarations: [
    LandingpageComponent,
    BookInfoComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingpageComponent,
    BookInfoComponent 
  ]
})
export class LandingpageModule { }
