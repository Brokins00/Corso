import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() post!: Post;
  @Input() button: boolean = false;
  @Input() editmode!: boolean;
  edit: boolean = false;
  changeEditMode() {
    this.edit = !this.edit;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editmode']) {
      const currentValue = changes['editmode'].currentValue;

      if (currentValue == false) {
        this.edit = false;
      }
    }
  }
}
