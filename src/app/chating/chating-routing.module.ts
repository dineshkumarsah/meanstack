import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
export const routes : Routes = [
{
    path : '',
    component : PostCreateComponent 
},
{
    path : 'header' ,
    component : HeaderComponent
}
]
@NgModule({
    exports : [RouterModule],
    imports : [RouterModule.forChild(routes)]
})
export class ChatingRoutingModule{} 