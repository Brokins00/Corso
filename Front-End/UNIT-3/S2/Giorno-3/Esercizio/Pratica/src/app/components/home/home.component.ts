import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { FetchsService } from 'src/app/service/fetchs.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    products!: Product[];
    constructor(private fetchs: FetchsService) {}
    ngOnInit(): void {
        this.fetchs.getAllProduct().subscribe(
            (res) => {
                this.products = res.products
            },
            (error) => console.log(error),
            (() => console.log('Completato'))
        );
    }
}
