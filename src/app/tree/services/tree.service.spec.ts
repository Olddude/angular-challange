import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TreeService } from './tree.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

describe('TreeService', () => {
  let service: TreeService;
  let http: HttpClient;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    service = TestBed.inject(TreeService);
    http = TestBed.inject(HttpClient);
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

    const hasQueryParam = spyOn(queryParamMapStub, 'has').and.returnValue(true);
    const getQueryParam = spyOn(queryParamMapStub, 'get').and.returnValue(mockUrl);

    const onNext = url => {
      expect(queryParamMap).toHaveBeenCalled();
      expect(hasQueryParam).toHaveBeenCalled();
      expect(getQueryParam).toHaveBeenCalled();
      expect(url).toEqual(mockUrl);
      done();
    };

    service.url().subscribe(onNext);
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

  it('should map json to tree', async () => {
    const input = await require('src/assets/example.json');
    const result = service.tree(input, 'root');
    expect(result).toBeTruthy();
  });

  [
    '2021-01-01T12:00:00.000000Z',
    /asd/g,
    '\.',
    0,
    '',
    '*',
    undefined,
    null,
    'false',
    'true',
    123,
    -200,
    { a: 'b' },
    [20, 30, 40]
  ].forEach(input => {
    it(`should get children for ${JSON.stringify(input)}`, async () => {
      const result = service.children(input);
      expect(result).toBeTruthy();
    });
  });
});
