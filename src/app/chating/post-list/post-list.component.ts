import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { post } from '../model/post.model';
import {CreatePostService} from '../services/create-post.service';
import {Subscription} from 'rxjs'

@Component({
    selector : 'app-post-list',
    templateUrl : './post-list.component.html',
    styleUrls : ['./post-list.component.css']
})
export class PostListComponent implements OnInit,OnDestroy{

    constructor(private createPostService: CreatePostService  ){}
  
    posts : post[]=[];
    private postSub: Subscription;
    ngOnInit(){
        this.createPostService.getPost();
       this.postSub= this.createPostService.getPostUpdateListner().subscribe(
            (posts : post[])=>{
              this.posts=posts; 
            }
        );
        
    }

    onDelete(postId: string) {
        this.createPostService.deletePost(postId);
      }
    ngOnDestroy(){
        this.postSub.unsubscribe();
    }
}