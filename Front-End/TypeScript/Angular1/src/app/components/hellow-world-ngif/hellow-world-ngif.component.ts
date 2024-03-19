import { Component } from '@angular/core';

const modifica = document.getElementById('modifica') as HTMLParagraphElement;

@Component({
  selector: 'app-hellow-world-ngif',
  templateUrl: './hellow-world-ngif.component.html',
  styleUrls: ['./hellow-world-ngif.component.scss']
})
export class HellowWorldNgifComponent {
    message = "I'm read only!";
    canEdit = false;

    onEditClick():void {
        this.canEdit = !this.canEdit;
        this.message = modifica.innerText;
        if (this.canEdit) {
          if (this.message == "I'm read only!") {
            this.message = 'You can edit me!';
          }
        } else {
          if (this.message == 'You can edit me!') {
            this.message = "I'm read only!"
          }
        }
    }
}
