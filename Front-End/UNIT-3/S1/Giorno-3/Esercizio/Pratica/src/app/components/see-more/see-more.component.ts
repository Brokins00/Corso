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
        href: 'javascript:void(0)'
      },
      {
        text: "Post inattivi",
        href: 'javascript:void(0)'
      }
    ]
}
