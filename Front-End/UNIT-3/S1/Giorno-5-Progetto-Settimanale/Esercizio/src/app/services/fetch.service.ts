import { Injectable } from '@angular/core';
import { BaseDati } from '../models/base-dati.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FetchsService {
    private _response!: BaseDati;
    private _responseSubject: BehaviorSubject<BaseDati> = new BehaviorSubject<BaseDati>({
        brandCars: [],
        brands: []
    })

    constructor() {}

    get response():BaseDati {
        return this._response
    }

    set response(value:BaseDati) {
        this._response = value;
        this._responseSubject.next(value)
    }

    async getDatas() {
        let query = await fetch('assets/data/db.json');
        this.response = await query.json();
    }

    get responseChange() {
        return this._responseSubject.asObservable();
    }
}
