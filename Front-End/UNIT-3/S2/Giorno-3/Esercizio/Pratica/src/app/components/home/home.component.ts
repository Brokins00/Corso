import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/interface/product.interface';
import { FetchsService } from 'src/app/service/fetchs.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    products!: Product[];
    sub!: Subscription;
    constructor(private fetchs: FetchsService) {}
    ngOnInit(): void {
        this.sub = this.fetchs.getAllProduct().subscribe(
            (res) => {
                this.products = res.products
            },
            (error) => console.log(error)
        );
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
