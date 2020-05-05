import { Component, OnInit } from '@angular/core';
import { IfesleService } from '../../service/ifesle.service';
import { Subscription } from 'rxjs';
import { IfElse } from '../../modal/ifelse.modal';


@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: [
  
  './ifelse.component.css',
 
 
  
]
})
export class IfelseComponent implements OnInit {
  ifelseSubscription:Subscription
  ifelseDeleteSubscription:Subscription;
  title:string
  rows:[];
  constructor(private ifelseService:IfesleService) { }

  ngOnInit() {
   this.getIfelseData();
  }
  getIfelseData(){
     this.ifelseSubscription=this.ifelseService.getPosts().subscribe(data=>{
       this.rows=data;
       
    });
  }
  delete(id:number){
    this.ifelseDeleteSubscription=this.ifelseService.deleteIfElse(id).subscribe(
      (data:IfElse)=>{
        this.getIfelseData();
      }
    );
    alert(id);
  }

}
