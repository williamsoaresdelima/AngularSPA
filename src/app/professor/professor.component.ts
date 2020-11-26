import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ProfService } from './prof.service';
import { Subscriber } from 'rxjs';
import { MateriaService } from '../materia/materia.service';


@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})


export class ProfessorComponent implements OnInit {
  
  professorForm!: FormGroup;
  professorList;
  materiaList;
  profid;
  btnSave="Salvar";

  constructor(private fb:FormBuilder, private http:HttpClient, private profservice:ProfService, private materiaservice:MateriaService) { }

  ngOnInit(): void {
      this.professorForm=this.fb.group({
      name:['']
    });
      this.GetProfessorData();
      this.materiaservice.GetAllMateriaForDDL().subscribe(data=>{
      this.materiaList=data;
    });
    
  }

  OnSubmit(){
    if(this.profid && this.profid>0){
        const profdataforupdate={id:this.profid,name:this.professorForm.controls.name.value};
        this.profservice.updateProfessor(profdataforupdate).subscribe(data=>{
            this.GetProfessorData();
            this.professorForm.reset();
            this.btnSave="Salvar";
             
        });
    }else{
      this.profservice.saveProfessor(this.professorForm.value).subscribe(data=>{ this.GetProfessorData();
        this.professorForm.reset();
      });
      
    }
  }

  GetProfessorData(){
    this.profservice.GetAllProfessor().subscribe(data=>{this.professorList=data;});
    //this.GetProfessorData();
  }

  edit(id){
    this.profservice.GetAllProfessorById(id).subscribe(data=>{
      this.profid=data.id;
      this.btnSave="Atualizar";
      this.professorForm.patchValue(data);
    });
  }

  delete(id){
    this.profservice.deleteProfessorById(id).subscribe(data=>{ this.GetProfessorData();});
  }

}
