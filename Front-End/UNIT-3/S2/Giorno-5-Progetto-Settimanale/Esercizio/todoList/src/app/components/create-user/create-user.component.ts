import { Component, OnDestroy, OnInit, TemplateRef, inject, ViewChild } from '@angular/core';
import { Subscription, map, Subject, takeUntil } from 'rxjs';
import { debounceTime, tap } from 'rxjs';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/service/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  private _message = new Subject<string>();

  successMessage = '';

  @ViewChild('selfClosingAlert', {static:false})
  selfClosingAlert!: NgbAlert;

  private modalService = inject(NgbModal);
  users: User[] = []
    user: User = {
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      image: "",
      id: 0
    };
    userSub!: Subscription;

    constructor(private userS:UserService) {
      this._message.pipe(
        takeUntilDestroyed(),
        tap((message) => this.successMessage = message),
        debounceTime(5000)
      ).subscribe(() => this.selfClosingAlert?.close());
    }

    changeSuccessMessage() {
      this._message.next('Utente creato con successo!');
    }

    ngOnInit(): void {
      this.userSub = this.userS.getAll().snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({key: c.payload.key, ...c.payload.val()} as User))
        )
      ).subscribe(data => {
        this.users = data
      })
    }

    async checkImage(url:string){
     
      const res = await fetch(url);
      return res.ok
 
    }

    ValidateEmail(mail:string) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true
  }
    return false
}

    async checkValidity() {
      if (this.user.firstName == '') {
        this._message.next('First Name is required');
        return false
      }
      if (this.user.lastName == '') {
        this._message.next('Last Name is required');
        return false
      }
      if (this.user.title == '') {
        this._message.next('Title is required');
        return false
      }
      let validity = await this.checkImage(this.user.image)
      if (!validity) {
        this._message.next('Image is not valid');
        return false
      }
      if (!this.ValidateEmail(this.user.email)) {
        this._message.next('Email is not valid');
        return false
      }
      return true
    }

    async openVerticallyCentered(content: TemplateRef<any>) {
      if (await this.checkValidity()) {
        this.modalService.open(content, { centered: true });
      }
    }

    ngOnDestroy(): void {
      this.userSub.unsubscribe();
    }

    onSubmit() {
      this.user.id = this.users[this.users.length - 1].id + 1
      this.userS.create(this.user)
    }
}
