import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  constructor(private router:Router,private medicamentService: MedicamentService) { }
  medicaments!: Array<any>
  errorMessage!:string
  ngOnInit(): void {
    this.handleGetAll()
  }

  handleGetAll(){
     this.medicamentService.getAllMedicaments()
     .subscribe({
      next:(data)=>{
        this.medicaments= data
      },
      error:(err)=>{
        this.errorMessage
      }
     })
  }

  handleAdd(){
    this.router.navigateByUrl('/add-medicament')
  }

}
