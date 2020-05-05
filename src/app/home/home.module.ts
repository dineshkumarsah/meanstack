import {BrowserModule} from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,  } from'@angular/material/toolbar';
//, , , 
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';







@NgModule({
  declarations: [HomeComponent],
  imports: [
    BrowserModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule,MatButtonModule,
    CommonModule,MatInputModule,MatCardModule,
    HomeRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap:[
    HomeComponent
  ]
})
export class HomeModule { }
