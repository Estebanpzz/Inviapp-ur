import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outputs',
  templateUrl: './outputs.component.html',
  styleUrls: ['./outputs.component.css']
})
export class OutputsComponent implements OnInit {
  Id: any;
  ProductName: any;
  Category: any;
  Capacity: any;
  MinimumStack: any;
  constructor() { }

  ngOnInit(): void {
  }

}
