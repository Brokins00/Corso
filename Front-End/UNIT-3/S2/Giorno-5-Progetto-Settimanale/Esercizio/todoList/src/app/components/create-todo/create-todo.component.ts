import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Subscription, debounceTime, map, tap } from 'rxjs';
import { Todo } from 'src/app/interface/todo.interface';
import { User } from 'src/app/interface/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  private _message = new Subject<string>();
  successMessage = '';

  @ViewChild('selfClosingAlert', {static:false})
  selfClosingAlert!: NgbAlert;

  private modalService = inject(NgbModal);

  users: User[] = []
  todo: Todo = {
    id: 0,
    todo: "",
    completed: false,
    userId: 0
  };
  userSub!: Subscription;
  todoSub!: Subscription;

  todos: Todo[] = []

  constructor(private todoS:TodoService, private userS:UserService) {
    this._message.pipe(
      takeUntilDestroyed(),
      tap((message) => this.successMessage = message),
      debounceTime(5000)
    ).subscribe(() => this.selfClosingAlert?.close());
  }

  changeSuccessMessage() {
    this._message.next('Todo created succesfully!');
  }

  ngOnInit(): void {
    this.userSub = this.userS.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()} as User))
      )
    ).subscribe(data => {
      this.users = data
    })
    this.todoSub = this.todoS.getAll().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({key: c.payload.key, ...c.payload.val()} as User))
      )
    ).subscribe(data => {
      this.todos = data;
    })
  }

  async checkValidity() {
    if (this.todo.todo == '') {
      this._message.next('Message is required');
      return false
    }
    if (this.todo.userId == 0) {
      this._message.next('You have to select a User');
      return false
    }
    return true
  }

  async openVerticallyCentered(content: TemplateRef<any>) {
    if (await this.checkValidity()) {
      this.modalService.open(content, { centered: true });
    }
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSubmit() {
    let id = this.todos[this.todos.length - 1].id
    this.todo.id = (id || -1) + 1;
    if (this.todo.id > 0) {
      this.todoS.create(this.todo)
    } else {
      this._message.next('There is an error. Contact the Administrator of this site');
    }
  }

  getFullName(id:number | undefined) {
    if (id) {
      let user = this.users.findIndex((value) => value.id == id)
      if (user !== -1) {
        return `${this.users[user].firstName} ${this.users[user].lastName}`
      }
    }
    return ""
  }
}
