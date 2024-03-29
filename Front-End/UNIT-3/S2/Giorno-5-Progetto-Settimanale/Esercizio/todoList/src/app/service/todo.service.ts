import { Injectable } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private dbPath = '/todo';
  todos!: AngularFireList<Todo>
  
  constructor(private db: AngularFireDatabase) {
    this.todos = this.db.list(this.dbPath)
  }

  getAll(): AngularFireList<Todo> {
    return this.todos;
  }

  create(tutorial: Todo): any {
    return this.todos.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.todos.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.todos.remove(key);
  }
}
