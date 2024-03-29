import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/users';
  users!: AngularFireList<User>
  
  constructor(private db: AngularFireDatabase) {
    this.users = this.db.list(this.dbPath)
  }

  getAll(): AngularFireList<User> {
    return this.users;
  }

  create(tutorial: User): any {
    return this.users.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.users.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.users.remove(key);
  }
}
