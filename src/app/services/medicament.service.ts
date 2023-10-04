import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicamentRequest } from '../models/medicament.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  apiPath = environment.path+'medicaments'
  constructor(private http: HttpClient) { }

  addMedicament(medicament:MedicamentRequest):Observable<any>{
   return this.http.post(this.apiPath+'/add-med',medicament)
  }

  getAllMedicaments():Observable<any>{
    return this.http.get(this.apiPath+'/list')
  }
}
