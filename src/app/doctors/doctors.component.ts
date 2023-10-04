import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors.service';
import { Doctor } from '../models/doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors!: Array<Doctor>
  errorMessage! :string
  constructor(
    private doctorService: DoctorsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.handleGetAll()
  }

  handleGetAll(){
    this.doctorService.getAllDoctors()
    .subscribe({
      next:(data)=>{
        this.doctors=data
      },
      error:(err)=>{ 
        this.errorMessage=err
      }
    });
  }

  handleActivate(d:Doctor){
    this.doctorService.setActivate(d.id)
    .subscribe({
      next:(data)=>{
        d.active=data
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
  } 
  handleDelete(d:Doctor){
    let conf = confirm('Are you sure?')
    if(conf==false) return;
    this.doctorService.deleteDoctor(d.id)
    .subscribe({
      next:(data)=>{
        let index = this.doctors.indexOf(d);
        this.doctors.splice(index,1);
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
  }

  handleAdd(){
   this.router.navigateByUrl('/add-doctor')
  }
}
