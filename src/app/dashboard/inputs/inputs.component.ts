import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
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

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.location.back();
  }
}
