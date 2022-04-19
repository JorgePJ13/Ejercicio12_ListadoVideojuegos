import { TestBed } from '@angular/core/testing';

import { LoginValidacionServicio } from './login-validacion.servicio';

describe('LoginValidacionServicio', () => {
  let service: LoginValidacionServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginValidacionServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});