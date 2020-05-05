
//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CalculatorDirective } from '../directive/calculator.directive';
import {FormtestComponent} from './component/formtest/formtest.component'
import { FormbuilderRoutingModule } from './formbuilder-routing.module';
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    FormtestComponent,
    CalculatorDirective,
  ],
  imports: [
    //BrowserModule,
    FormbuilderRoutingModule,
    ReactiveFormsModule
  ],
 
  providers: [],
  bootstrap: [FormtestComponent]
})
export class FormbuilderModule { }

