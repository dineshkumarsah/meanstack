import { Injectable } from '@angular/core';
import {post} from '../model/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
 
  private posts : post[]=[]; 
  private postUpdated= new Subject<post[]>()
  constructor(private httpClient : HttpClient) { }

  getPost(){
    this.httpClient.get<{message:string,posts:any}>("http://localhost:3000/api/posts").
    pipe(map((postData)=>{
      return postData.posts.map(post=>{
       return{
         title:post.title,
         content:post.content,
         id:post._id
       }
      })
    }))
    .subscribe((transformedPosts)=>{
      this.posts=transformedPosts;
      this.postUpdated.next([... this.posts])
    });
   //return this.posts
  }
  getPostUpdateListner(){
    return this.postUpdated.asObservable();
  }
  addPost(title:string,content:string){
    const post ={id: null,title:title,content:content}
    this.httpClient.post<{message: string}>("http://localhost:3000/api/posts",post).
    subscribe((responseData)=>{
       console.log(responseData.message);
       this.posts.push(post);
       this.postUpdated.next([...this.posts]);
       
    });
  }
}
