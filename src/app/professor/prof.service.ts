import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProfService {

  baseUrl = 'https://webapi20201126121123.azurewebsites.net/professor/';

  constructor(private http: HttpClient) { }

    saveProfessor(ProfessorData){
     return  this.http.post(this.baseUrl + 'AddProfessor', ProfessorData);
    }

    updateProfessor(ProfessorData){
      return this.http.put(this.baseUrl + 'UpdateProfessor', ProfessorData);
    }

    GetAllProfessor(){
     return  this.http.get(this.baseUrl + 'GetAllProfessor');
    }

    GetAllProfessorById(profId){
      return (this.http.get(this.baseUrl + 'GetProfessorById/' + profId));
    }

    deleteProfessorById(profId){
      return this.http.delete(this.baseUrl + 'DeleteProfessor/' + profId);
    }
}
