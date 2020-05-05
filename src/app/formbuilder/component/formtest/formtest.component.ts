import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent implements OnInit {

  contactForm: FormGroup
  companyName:string;
  name:string;
  contactNo:string
  show:boolean=false;

  constructor() { }

  ngOnInit() {
    this.contactForm= new FormGroup({
      'name':new FormControl(null,Validators.required),
      'companyName' : new  FormControl(null),
      'contactNo' : new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.contactForm);
   this.companyName= this.contactForm.controls.companyName.value;
   this.name=this.contactForm.controls.name.value;
   this.contactNo=this.contactForm.controls.contactNo.value;
   this.show=true
  }

}
