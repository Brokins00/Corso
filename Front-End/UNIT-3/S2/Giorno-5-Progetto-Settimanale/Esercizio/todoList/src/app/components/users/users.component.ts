import { Component } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { Mix } from 'src/app/interface/mix.interface';
import { Todo } from 'src/app/interface/todo.interface';
import { User } from 'src/app/interface/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  todos: Todo[] = [];
  users: User[] = [];
  mix: Mix[] = []
  todoSub!: Subscription;
  userSub!: Subscription;

  constructor(private todo: TodoService, private user: UserService) {}

  ngOnInit(): void {
    this.todoSub = this.todo.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}as Todo))
      )
    ).subscribe(data => {
      this.todos = data
      this.mixVar()
    })
    this.userSub = this.user.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()} as User))
      )
    ).subscribe(data => {
      this.users = data
      this.mixVar()
    })
  }

  mixVar() {
    this.mix = []
    this.users.forEach(element => {
      let mixer:Mix = {...element, todos: []}
      mixer.todos = this.todos.filter((todo) => todo.userId == element.id)
      this.mix.push(mixer)
    })
  }

  ngOnDestroy(): void {
    this.todoSub.unsubscribe();
    this.userSub.unsubscribe();
  }

  toggleIcon(id:string | undefined, completed: boolean) {
    if (id) {
      this.todo.update(id, {completed: completed})
    }
  }

  getUserName(id:number | undefined) {
    if (id) {
      let user = this.users.findIndex((value) => value.id == id)
      if (user !== -1) {
        return `${this.users[user].firstName} ${this.users[user].lastName}`
      }
    }
    return ""
  }
}
