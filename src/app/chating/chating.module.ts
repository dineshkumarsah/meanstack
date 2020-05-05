import { NgModule } from "@angular/core";
import {PostCreateComponent} from './post-create/post-create.component';
import { ChatingRoutingModule} from './chating-routing.module';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import {HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';
import { CreatePostService } from './services/create-post.service';



@NgModule({
    declarations : [PostCreateComponent,HeaderComponent,PostListComponent],
    imports : [ChatingRoutingModule,FormsModule,MatIconModule,MatSidenavModule,MatSidenavModule,
        MatListModule,MatButtonModule,MatInputModule,MatCardModule,MatToolbarModule,
        CommonModule,HttpClientModule,
    MatExpansionModule],
    providers : [CreatePostService],
    bootstrap : []
})

export class ChatingModule{}