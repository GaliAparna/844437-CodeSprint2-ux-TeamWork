import { TestBed } from '@angular/core/testing';

import { PlaceAppointment } from './place-appointment.service';

describe('PlaceAppointmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceAppointment = TestBed.get(PlaceAppointment);
    expect(service).toBeTruthy();
  });
});
