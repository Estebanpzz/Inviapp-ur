import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regproducts',
  templateUrl: './regproducts.component.html',
  styleUrls: ['./regproducts.component.css']
})
export class RegproductsComponent implements OnInit {
  Id: any;
  ProductName: any;
  Category: any;
  Capacity: any;
  MinimumStack: any;
  constructor() { }

  ngOnInit(): void {
  }

}
