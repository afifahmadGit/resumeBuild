import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ResumeDetailsComponent } from './resumeBuild/resume-details/resume-details.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResumeComponent } from './layouts/resume/resume.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    ResumeDetailsComponent,
    ResumeComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,ReactiveFormsModule,MatSidenavModule,MatButtonModule,
    MatIconModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
