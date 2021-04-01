import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FetchService } from './fetch.service';

describe('FetchService', () => {
  let service: FetchService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FetchService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data via http', (done) => {
    const randomUrl = 'http://localhost:8080/v1/api';
    const httpGet = spyOn(http, 'get').and.returnValue(of({}));
    const onNext = () => {
      expect(httpGet).toHaveBeenCalled();
      done();
    };
    service.fetch(randomUrl).subscribe(onNext);
  });

});
