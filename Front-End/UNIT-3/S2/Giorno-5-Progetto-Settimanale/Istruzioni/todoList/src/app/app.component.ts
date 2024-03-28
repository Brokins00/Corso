import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todoList';

  constructor(private todo: TodoService) {}

  ngOnInit(): void {
    this.todo.getTodos().subscribe((res) => {
      console.log(res)
      this.todo.setTodos(res)
    },
    (error) => {
      console.log(error)
    })
  }
}
