import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { AddMedicamentComponent } from './add-medicament/add-medicament.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'doctors',component:DoctorsComponent},
  {path:'medicaments',component:MedicamentsComponent},
  {path:'add-doctor',component:AddDoctorComponent},
  {path:'edit-doctor/:id',component:EditDoctorComponent},
  {path:'add-medicament',component:AddMedicamentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
