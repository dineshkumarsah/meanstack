import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component'
import { HeaderComponent } from './header/header.component';
import { ChatingComponent } from './chating.component';
export const routes: Routes = [
    {path: '' , component: ChatingComponent},
    {
        path: 'chatingManage',
        component: PostCreateComponent
    },
    {
        path: 'header',
        component: HeaderComponent
    },
    { path: 'list', component: PostListComponent },
    { path: 'edit/:postId', component: PostCreateComponent },
   

]
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ChatingRoutingModule { } 