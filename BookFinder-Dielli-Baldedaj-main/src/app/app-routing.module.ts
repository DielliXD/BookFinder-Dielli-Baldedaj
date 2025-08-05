import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage/landingpage.component';
import { BookInfoComponent } from './landingpage/book-info/book-info.component';

const routes: Routes = [
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'book-info/:id', component: BookInfoComponent },
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: '**', redirectTo: '/landingpage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
