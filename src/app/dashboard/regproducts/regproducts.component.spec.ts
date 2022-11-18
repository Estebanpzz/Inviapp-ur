import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegproductsComponent } from './regproducts.component';

describe('RegproductsComponent', () => {
  let component: RegproductsComponent;
  let fixture: ComponentFixture<RegproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
