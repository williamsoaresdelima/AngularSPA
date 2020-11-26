import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {

  materiaList;
  constructor(private materiaservice: MateriaService) { }

  ngOnInit(): void {
    this.materiaservice.GetAllMateria().subscribe(materialList=>{
      this.materiaList = materialList;
    });
  }

  updateStatus(materiaid){
    this.materiaservice.UpdateMateriaStatus(materiaid).subscribe(data=>{
      console.log(data);
      this.materiaservice.GetAllMateria().subscribe(materialList=>{
        this.materiaList = materialList;
      });
    });
  }

}
