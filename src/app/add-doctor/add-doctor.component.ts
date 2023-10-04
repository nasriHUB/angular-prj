import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  addDoctorFormGroup!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addDoctorFormGroup = this.fb.group({
      name: this.fb.control(null,[Validators.required,Validators.minLength(6)]),
      speciality: this.fb.control('',[Validators.required]),
      active: this.fb.control(false,[Validators.required])
    })
  }

  add(){
    
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
