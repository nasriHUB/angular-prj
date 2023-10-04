import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CommentItemComponent,
    NavBarComponent,
    DoctorsComponent,
    MedicamentsComponent,
    AddDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
