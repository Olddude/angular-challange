import { TestBed } from '@angular/core/testing';

import { TreeService } from './tree.service';

describe('TreeService', () => {
  let service: TreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map json to tree', () => {
    const input = {
      a: {
        b: {
          c: {
            d: 'e'
          },
          f: [12, 20, 30],
          g: []
        },
        h: 'foobar'
      }
    };
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
