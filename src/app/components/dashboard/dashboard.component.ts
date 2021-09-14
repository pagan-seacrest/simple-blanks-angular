import { ValuesService } from './../../services/values.service';
import { TransferService } from 'src/app/services/transfer.service';
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild,  } from '@angular/core';
import { BlankComponent, IBlank } from '../blank/blank.component';

@Component({
  selector: 'app-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
  <ul class="c__list" >
        <app-blank
                *ngFor="let item of list; let i=index"
                [idx]="i"
                [title]="item.title"
                [content]="item.content"
        ></app-blank>
        <app-modal></app-modal>
  </ul>
  `,
})
export class DashboardComponent implements OnInit {

  list: IBlank[] = [];

  constructor(private ls: TransferService, private values: ValuesService) {

  }
  
  ngOnInit(): void {
    this.values.curentList.subscribe(list => {
      this.list = list;
    })
  }

}
