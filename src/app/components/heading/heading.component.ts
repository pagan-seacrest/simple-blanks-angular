import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  text = "Simlpe Blanks";
  constructor() { }

  ngOnInit(): void {
  }

}
