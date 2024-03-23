import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametriService {
  private _name:string | undefined;
  private _nameSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  constructor() { }

  get name():string | undefined {
    return this._name
  }

  set name(value:string|undefined) {
    this._name = value;
    this._nameSubject.next(value)
  }

  get nameChange() {
    return this._nameSubject.asObservable();
  }
}
