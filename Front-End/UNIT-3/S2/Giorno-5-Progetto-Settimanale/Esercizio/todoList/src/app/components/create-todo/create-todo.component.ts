import { Component } from '@angular/core';
import { Todo } from 'src/app/interface/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  todo: Todo = {}

  constructor(private todoS:TodoService) {}

  onSubmit() {
    this.todoS.create(this.todo)
  }
}
