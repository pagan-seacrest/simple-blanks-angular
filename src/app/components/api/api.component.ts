import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss'],
})
export class ApiComponent implements OnInit {

  api: any = "";

  constructor(private http: HttpService) {
    this.api = this.http.getReq();
    console.log(this.api);
  }

  ngOnInit(): void {
  }

}
