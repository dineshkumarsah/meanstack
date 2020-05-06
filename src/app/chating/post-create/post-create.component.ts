import { Component ,EventEmitter, Output, Input} from "@angular/core";
import {post} from '../model/post.model'
import { NgForm } from '@angular/forms';
import {CreatePostService} from '../services/create-post.service'

@Component({
    selector : 'app-post-create',
    templateUrl : './post-create.component.html',
    styleUrls : ['./post-create.component.css']
})
export class PostCreateComponent{
    newPost:string='no coment ';
    enterTitle:string = '';
    enterContent : string ='';
    storePost :post[]=[]
    constructor(private createPostService: CreatePostService){

    }
    onAddPost(Form:NgForm){
        this.createPostService.addPost(Form.value.enterTitle,Form.value.enterContent);
        Form.resetForm();
        
    }
}