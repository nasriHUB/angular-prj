import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DoctorsService } from '../services/doctors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  addDoctorFormGroup!: FormGroup
  errorMessage!: string
  constructor(private fb: FormBuilder,
    private doctorService: DoctorsService,
    private router: Router) { }

  ngOnInit(): void {
    this.addDoctorFormGroup = this.fb.group({
      name: this.fb.control(null,[Validators.required,Validators.minLength(6)]),
      speciality: this.fb.control('',[Validators.required]),
      active: this.fb.control(false,[Validators.required])
    })
  }

  handleAddDoctor(){
      let doctor = this.addDoctorFormGroup.value
      this.doctorService.addDoctor(doctor)
      .subscribe({
        next:(data)=>{
          //this.router.navigateByUrl('/doctors')
          this.router.navigate(['/doctors'])
        },
        error:(err)=>{ 
          this.errorMessage= err
        }
      })
  }

  getErrorMessage(fieldName: string,errors:ValidationErrors):string{
    if (errors['required']) {
     return fieldName+' is Required';
    } else if (errors['minlength']) {
     return fieldName+' should have at least '+errors['minlength']['requiredLength']+' Characters';
    }
    else if (errors['min']) {
     return fieldName+' should have min value '+errors['min']['min'];
    }
    else return '';
   }

}
