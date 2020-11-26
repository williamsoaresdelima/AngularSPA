import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  baseUrl = 'https://webapi20201126121123.azurewebsites.net//materia/';
  
  constructor(private http: HttpClient) { }

    saveMateria(MateriaData){
     return  this.http.post(this.baseUrl + 'AddMateria', MateriaData);
    }

    updateMateria(MateriaData){
      return this.http.put(this.baseUrl + 'UpdateMateria', MateriaData);
    }

    GetAllMateria(){

      //window.alert(this.baseUrl + 'GetAllMateria');
      return  this.http.get(this.baseUrl + 'GetAllMateria');
      
    }

    GetMateriaById(matId):any{
      return (this.http.get(this.baseUrl + 'GetMateriaById/'+matId+''));
    }

    GetAllMateriaForDDL(){
      return  this.http.get(this.baseUrl + 'GetAllMateriaForDDL');
    }

    UpdateMateriaStatus(matId):any{
      return (this.http.get(this.baseUrl + 'UpdateMateriaStatus/'+matId+''));
    }
}
