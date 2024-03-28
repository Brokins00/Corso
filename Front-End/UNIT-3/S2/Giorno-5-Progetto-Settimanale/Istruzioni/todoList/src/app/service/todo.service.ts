import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = "https://todolist-ef715-default-rtdb.europe-west1.firebasedatabase.app/todo.json"
  _todo: Array<Todo> = [];
  todo: Subject<Todo[]> = new Subject()
  constructor(private http: HttpClient) {}

  addTodo(valore:string) {
    this._todo.push({message: valore})
    this.todo.next(this._todo)
    return this.http.post(this.url, {message: valore})
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url)
  }

  setTodos(res:Todo[]) {
    this._todo = [];
    for (const [key, value] of Object.entries(res)) {
      this._todo.push(value)
    }
    this.todo.next(this._todo)
  }
}
