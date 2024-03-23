import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ParametriService } from './services/parametri.service';
import { FetchsService } from './services/fetch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoaded = false;
  showFooter = true;
  private sub!:Subscription;
  constructor(private parametri: ParametriService, private fetchs: FetchsService, private cdr: ChangeDetectorRef) {
  }

  async ngOnInit() {
    await this.fetchs.getDatas()
    this.isLoaded = true
    this.sub = this.parametri.nameChange.subscribe((name:string | undefined) => {
      this.showFooter = name == undefined;
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
