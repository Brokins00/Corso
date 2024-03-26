import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class GeneraleService {

  constructor() { }
  async getPosts():Promise<Post[]>{
    let query = await fetch('assets/db.json')
    let response:Post[] = await query.json();
    return response
  }
  interested(qtty:number, posts:Post[]): Post[] {
    let count = 0;
    let usciti:number[] = [];
    let array:Post[] = [];
    while (count < qtty) {
      let random = Math.floor(Math.random() * qtty)
      while (usciti.includes(random)) {
        random = Math.floor(Math.random() * qtty)
      }
      usciti.push(random)
      array.push(posts[random])
      count++;
    }
    return array;
  }
  async getPostsById(id:number) {
    let query = await fetch('assets/db.json')
    let response:Post[] = await query.json();
    let index = response.findIndex((value) => value.id = id)
    return response[index]
  }
}
