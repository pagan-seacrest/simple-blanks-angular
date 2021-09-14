import { ValuesService } from './services/values.service';
import { HttpService } from './services/http.service';
import { Component, OnInit } from '@angular/core';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "simple-blanks-angular";
  blankTitle = "";
  blankContent = "";

  
  constructor(
    private httpService: HttpService, private values: ValuesService) {
  }

  ngOnInit() {
  }
}
