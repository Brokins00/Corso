import { Todo } from "./todo.interface";
import { User } from "./user.interface";

export interface Mix extends User {
    todos: Todo[]
}
