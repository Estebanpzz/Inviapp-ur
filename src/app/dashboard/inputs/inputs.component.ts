import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  Id: any;
  ProductName: any;
  Category: any;
  Capacity: any;
  MinimumStack: any;

  constructor() { }

  ngOnInit(): void {
  }
  
}
