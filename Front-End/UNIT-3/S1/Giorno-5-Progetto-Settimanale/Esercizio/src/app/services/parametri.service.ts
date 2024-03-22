import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametriService {
  id!: string;
  name!:string;
  constructor() { }
}
