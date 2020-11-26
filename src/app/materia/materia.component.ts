import { Component, OnInit } from '@angular/core';
import { MateriaService } from './materia.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materia;
  btnText = 'Salvar';
  materiaid;

  constructor(private materiaService: MateriaService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param=>{
      if(param){
        this.materiaid = param.get('id');
        this.materiaService.GetMateriaById(this.materiaid).subscribe(mat=>{
          this.materia = mat.name;
          this.btnText = 'Atualizar';
        })
      }
    });
  }


  SubmitMateria()  {
    const catData = {id:this.materiaid, name:this.materia, isactive:1, isdelete:0 };

    if(this.materiaid && this.materiaid>0){
      this.materiaService.updateMateria(catData).subscribe(data=>{
        console.log(data);
        alert('Atualizado com Sucesso!');
        this.router.navigate(['lista-materia']);
      });
    }else{
      this.materiaService.saveMateria(catData).subscribe(data=>{
        console.log(data);
        alert('Salvo com Sucesso!');
        this.router.navigate(['lista-materia']);
      });
    }
  }


}
