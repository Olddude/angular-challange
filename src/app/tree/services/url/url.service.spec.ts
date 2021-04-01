import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(UrlService);
    route = TestBed.inject(ActivatedRoute);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get default url from environment', (done) => {
    const onNext = url => {
      expect(url).toEqual(environment.url.default);
      done();
    };
    service.url().subscribe(onNext);
  });

  it('should get url from query param', (done) => {
    const mockUrl = 'http://localhost:8080/api/v1/resource';

    const queryParamMapStub = { has: () => ({}), get: () => ({}) };

    const queryParamMap = spyOnProperty(route, 'queryParamMap')
      .and.returnValue(of(queryParamMapStub));

    const hasQueryParam = spyOn(queryParamMapStub, 'has')
      .and.returnValue(true);
    const getQueryParam = spyOn(queryParamMapStub, 'get')
      .and.returnValue(mockUrl);

    const onNext = url => {
      expect(queryParamMap).toHaveBeenCalled();
      expect(hasQueryParam).toHaveBeenCalled();
      expect(getQueryParam).toHaveBeenCalled();
      expect(url).toEqual(mockUrl);
      done();
    };

    service.url().subscribe(onNext);
  });

});
