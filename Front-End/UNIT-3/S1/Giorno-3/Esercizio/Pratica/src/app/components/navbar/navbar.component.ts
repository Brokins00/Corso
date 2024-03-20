import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    title = 'Blog';
    links = [
        {
            text: 'Home',
            href: 'javascript:void(0)',
            class: 'nav-link active'
        },
        {
            text: 'Active posts',
            href: 'javascript:void(0)',
            class: 'nav-link'
        },
        {
            text: 'Inactive posts',
            href: 'javascript:void(0)',
            class: 'nav-link'
        },
    ];
}
