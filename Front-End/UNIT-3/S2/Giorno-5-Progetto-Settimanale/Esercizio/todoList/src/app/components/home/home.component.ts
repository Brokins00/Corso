import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from 'src/app/interface/todo.interface';
import { User } from 'src/app/interface/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  todos: Todo[] = []
  users: User[] = []
  filtered: Todo[] = []
  todoSub!: Subscription;
  userSub!: Subscription;
  data: any;
  _filter: string = ''

  constructor(private todo: TodoService, private user: UserService) {}

  filter() {
    const search = document.getElementById('filter') as HTMLInputElement;
    if (search.value == '') {
      this.filtered = this.todos
    } else {
      this.filtered = this.todos.filter((element) => {
        let find = this.users.findIndex((element2) => element.userId == element2.id)
        if (find !== -1) {
          if (this.users[find].firstName?.includes(search.value) || this.users[find].lastName?.includes(search.value)) {
            return true
          }
        }
        return false
      })
    }
  }

  ngOnInit(): void {
    this.todoSub = this.todo.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}as Todo))
      )
    ).subscribe(data => {
      this.todos = data
      this.filter()
    })
    this.userSub = this.user.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()} as User))
      )
    ).subscribe(data => {
      this.users = data
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
