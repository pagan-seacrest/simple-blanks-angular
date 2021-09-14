import { ValuesService } from './../../services/values.service';
import { TransferService } from './../../services/transfer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panelbar',
  templateUrl: './panelbar.component.html',
  styleUrls: ['./panelbar.component.scss']
})
export class PanelbarComponent implements OnInit {

  @Output() editEvent = new EventEmitter();
  
  constructor(private ls: TransferService, private values: ValuesService) { }
  
  onSave() {}
  onAdd() {}
  onEdit() {}
  onClear() {}
  onRemove() {}

  ngOnInit(): void { }

}
