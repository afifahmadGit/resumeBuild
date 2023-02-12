import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ResumeComponent } from './layouts/resume/resume.component';
import { ResumeDetailsComponent } from './resumeBuild/resume-details/resume-details.component';

const routes: Routes = [
  // {path:"",redirectTo:'home',pathMatch:'full'},
  {
    path:'home',component:HomeLayoutComponent
  },
  {path:'resume-build',component:ResumeDetailsComponent,
    children:[{path:'layouts',component:ResumeComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
