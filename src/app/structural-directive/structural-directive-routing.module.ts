import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IfelseComponent } from './component/ifelse/ifelse.component';
import { IfelseFormComponent } from './component/ifelse-form/ifelse-form.component';


export const routes: Routes = [
  {
    path:'',
    component:IfelseComponent
  },
  {
    path:'form',
    component: IfelseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuralDirectiveRoutingModule { }
