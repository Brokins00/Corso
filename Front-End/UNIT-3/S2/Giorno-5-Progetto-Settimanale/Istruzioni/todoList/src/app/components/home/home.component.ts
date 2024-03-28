import { Component } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    constructor(private todo: TodoService) {}
    addTodo() {
        const input = document.getElementById('control') as HTMLInputElement;
        if (input.value.trim() !== '') {
            this.todo.addTodo(input.value).subscribe(
                (res) => {
                  console.log(res)
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    console.log('Aggiunto con successo');
                }
            );
        } else {
          alert('Devi inserire qualcosa!')
        }
    }
}
