/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudRequestsService } from './crud-requests.service';

describe('CrudRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudRequestsService]
    });
  });

  it('should ...', inject([CrudRequestsService], (service: CrudRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
