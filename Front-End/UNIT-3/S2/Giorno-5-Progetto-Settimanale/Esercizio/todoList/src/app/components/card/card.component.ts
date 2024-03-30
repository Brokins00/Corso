import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/interface/todo.interface';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() todo!: Todo;
    @Input() userName: string = "";

    constructor(private todoS:TodoService){}

    toggleIcon(id:string | undefined, completed: boolean) {
      if (id) {
        this.todoS.update(id, {completed: completed})
      }
    }
}
