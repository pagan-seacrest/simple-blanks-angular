import { ValuesService } from './../../services/values.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

export interface IBlank {
  title: string,
  content: string
  id?: number | string
}

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
  isModalShown: boolean = true;
  @Input() title: string = "any"
  @Input() content: string = "any";
  @Input() idx: any;

  @Output() valuesEvent = new EventEmitter<IBlank>();
  liftValues(): void {
    this.valuesEvent.emit({title: this.title, content: this.content});
  }
  
  edit(): void {
    // this.values.sendValues({id: this.idx, title: this.title, content: this.content});
    this.isModalShown = true;
  }

  add(): void {
    this.values.showModal(true);
  }
  
  constructor(private ls: TransferService, private values: ValuesService) {}

  ngOnInit(): void {
    // this.values.currentModalState.subscribe(state => this.isModalShown = state);
  }
}
