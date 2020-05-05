import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'formBuilder', 
  loadChildren: () => import('../formbuilder/formbuilder.module').then(m => m.FormbuilderModule) 
  },
  {
    path: 'structuralDirective',
    loadChildren: () =>import('../structural-directive/structural-directive.module').then(m=>m.StructuralDirectiveModule)
  },
  {
    path : 'chating',
    loadChildren : () =>import('../chating/chating.module').then(m=>m.ChatingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
