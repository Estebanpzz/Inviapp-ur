import { TestBed } from '@angular/core/testing';

import { SignUpService } from './singup.service';

describe('EquipoService', () => {
  let service: SignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});