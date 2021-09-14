import { Filter, InteractionService } from './../../services/interaction.service';
import { combineLatest, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ITodos } from 'src/app/services/interaction.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  constructor(private todos: InteractionService) {

    
  }
  
  ngOnInit(): void {
  }

}
