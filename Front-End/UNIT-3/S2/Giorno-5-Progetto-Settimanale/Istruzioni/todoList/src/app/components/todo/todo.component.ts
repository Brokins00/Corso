import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interface/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  todos: Todo[] = [];

  constructor(private todo:TodoService) {}
  ngOnInit(): void {
    this.sub = this.todo.todo.subscribe((res) => {
      this.todos = res
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
