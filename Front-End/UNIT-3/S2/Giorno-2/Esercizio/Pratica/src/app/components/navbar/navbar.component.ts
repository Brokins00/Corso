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
            href: '/'
        },
        {
            text: 'Active posts',
            href: '/active'
        },
        {
            text: 'Inactive posts',
            href: '/inactive'
        },
    ];
}
