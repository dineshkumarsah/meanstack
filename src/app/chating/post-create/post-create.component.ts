import { Component ,EventEmitter, Output, Input, OnInit} from "@angular/core";
import {post} from '../model/post.model'
import { NgForm } from '@angular/forms';
import {PostsService} from '../services/create-post.service'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { from } from 'rxjs';

@Component({
    selector : 'app-post-create',
    templateUrl : './post-create.component.html',
    styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{
    newPost:string='no coment ';
    enterTitle:string = '';
    enterContent : string ='';
    storePost :post[]=[];
    private mode : string='create';
    private postId:string;
    post : post;
    constructor(private createPostService: PostsService,public route: ActivatedRoute){
  
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap: ParamMap) => {
          if (paramMap.has("postId")) {
            this.mode = "edit";
            this.postId = paramMap.get("postId");
            this.post = this.createPostService.getPost(this.postId);
          } else {
            this.mode = "create";
            this.postId = null;
           
          }
        });
      }
    onSavePost(form:NgForm){
      if(form.invalid){
        return;
      }
      if(this.mode==="create"){
        this.createPostService.addPost(form.value.enterTitle,form.value.enterContent);
      }else{
        this.createPostService.updatePost(
         this.postId,
         form.value.enterTitle,
         form.value.enterContent
        )
      }
       
        form.resetForm();
        
    }

    
}