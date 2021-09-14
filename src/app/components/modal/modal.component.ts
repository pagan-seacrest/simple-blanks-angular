import { IBlank } from './../blank/blank.component';
import { ValuesService } from './../../services/values.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string = "";
  @Input() content: string = "";
  // isModalShown: boolean = true;
  
  constructor(private ls: TransferService, private values: ValuesService) {
  }

  handleUpdate() {
    this.values.showModal(false);
  }

  handleClose(): void {
    this.values.showModal(false);
  }

  ngOnInit(): void {    
    
  }

}
