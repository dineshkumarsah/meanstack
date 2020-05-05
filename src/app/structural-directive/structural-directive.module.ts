import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import { MatInputModule, } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';
import { StructuralDirectiveRoutingModule } from './structural-directive-routing.module';
import { IfelseComponent } from './component/ifelse/ifelse.component';
import {IfesleService} from './service/ifesle.service';
import {MatIconModule} from '@angular/material/icon';
import { IfelseFormComponent } from './component/ifelse-form/ifelse-form.component';


@NgModule({
  declarations: [IfelseComponent, IfelseFormComponent],
  imports: [
    CommonModule,
    StructuralDirectiveRoutingModule,MatInputModule,MatButtonModule,
    HttpClientModule,
    NgxDatatableModule,
    MatIconModule,
    MatCardModule,FormsModule
  ],
  providers:[IfesleService]
})
export class StructuralDirectiveModule { }
