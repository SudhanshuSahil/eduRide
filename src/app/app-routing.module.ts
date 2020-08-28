import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentComponent } from './student/student.component';
import { HelperComponent } from './helper/helper.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'student', component: StudentComponent },
  { path: 'helper', component: HelperComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
