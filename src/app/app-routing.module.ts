import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaListComponent } from './materia/materia-list/materia-list.component';
import { MateriaComponent } from './materia/materia.component';
import { ProfessorComponent } from './professor/professor.component';

const routes: Routes = [
  {path:'professor',component:ProfessorComponent},
  {path:'materia',component:MateriaComponent},
  {path:'lista-materia',component:MateriaListComponent},
  {path:'editar-materia/:id',component:MateriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
