import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Doctor } from '../models/doctor.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  doctors! : Array<Doctor>; //Doctor[] 
  constructor() { 
    this.doctors = [
      {id:1,name:'doctor 1',speciality:'sepc 1',active:true},
      {id:2,name:'doctor 2',speciality:'sepc 2',active:true},
      {id:3,name:'doctor 3',speciality:'sepc 3',active:false},
      {id:4,name:'doctor 4',speciality:'sepc 4',active:true},
      {id:5,name:'doctor 5',speciality:'sepc 5',active:false}
    ]
  }
   
  getAllDoctors():Observable<Array<Doctor>>{
    let rand = Math.random()
    if(rand<0.1) return throwError(()=> new Error('No Data Found'))
    return of(this.doctors)
  }

  getOneDoctor(id:number):Observable<Doctor>{
    let doctor = this.doctors.find(d=>d.id==id)
    if (doctor!=undefined) {
      return of(doctor)
    }
    return throwError(()=> new Error('Doctor not found'))
  }

  setActivate(id:number):Observable<boolean>{
    let doctor = this.doctors.find(d=>d.id==id)
    if (doctor!=undefined) {
      doctor.active = !doctor.active
      return of(doctor.active)
    }
    return throwError(()=> new Error('Doctor not found'))
  }

  deleteDoctor(id:number):Observable<boolean>{
    this.doctors = this.doctors.filter(d=>d.id!=id)
    return of(true)
  }


}
