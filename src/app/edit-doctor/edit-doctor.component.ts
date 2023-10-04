import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorsService } from '../services/doctors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../models/doctor.model';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  editDoctorFormGroup!: FormGroup
  errorMessage!: string
  doctor!: Doctor
  constructor(private fb:FormBuilder,
    private doctorService: DoctorsService,
    private router: Router,
    private activedRoute: ActivatedRoute) { 
    
    }

  ngOnInit(): void {
    let id = this.activedRoute.snapshot.params['id']
    this.doctorService.getOneDoctor(id)
    .subscribe({
      next:(data)=>{
        this.doctor = data
        this.editDoctorFormGroup = this.fb.group({
          id: this.fb.control(this.doctor.id),
          name: this.fb.control(this.doctor.name),
          speciality: this.fb.control(this.doctor.speciality),
          active: this.fb.control(this.doctor.active)
        })
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
    
  }

  handleEditDoctor(){
    let doctor = this.editDoctorFormGroup.value
   this.doctorService.editDoctor(doctor).subscribe({
    next:(data)=>{
      alert('Doctor updated!')
      this.router.navigateByUrl('/doctors')
    },
    error:(err)=>{
      console.log(err)
    }
   })
  }

}
