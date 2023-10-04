import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicamentService } from '../services/medicament.service';

@Component({
  selector: 'app-add-medicament',
  templateUrl: './add-medicament.component.html',
  styleUrls: ['./add-medicament.component.css']
})
export class AddMedicamentComponent implements OnInit {
  addMedicamentFormGroup!:FormGroup
  constructor(private fb: FormBuilder,private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.addMedicamentFormGroup = this.fb.group({
      intitule:this.fb.control(null),
      description:this.fb.control(null),
      spId:this.fb.control(null),
      nbreMed:this.fb.control(null)   
    })
  }

  handleAddMedicament(){
   let medicament = this.addMedicamentFormGroup.value
   console.log(medicament)
   this.medicamentService.addMedicament(medicament)
   .subscribe({
    next:(data)=>{
      console.log(data)
    },
    error:(err)=>{
      console.log(err)
    }
    
   })    
  }
}
