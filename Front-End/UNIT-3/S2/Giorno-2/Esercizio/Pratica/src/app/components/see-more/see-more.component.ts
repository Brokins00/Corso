import { Component } from '@angular/core';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.scss']
})
export class SeeMoreComponent {
    links = [
      {
        text: "Post attivi",
        href: '/active'
      },
      {
        text: "Post inattivi",
        href: '/inactive'
      }
    ]
}
