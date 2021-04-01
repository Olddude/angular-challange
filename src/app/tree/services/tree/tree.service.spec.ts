import { TestBed } from '@angular/core/testing';
import { ValueTypeService } from '../value-type/value-type.service';

import { TreeService } from './tree.service';

describe('TreeService', () => {
  let service: TreeService;
  let valueTypeService: ValueTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ValueTypeService,
          useFactory: () => ({ classify: () => ('object') })
        }
      ]
    });
    service = TestBed.inject(TreeService);
    valueTypeService = TestBed.inject(ValueTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build object into tree', () => {
    const classifySpy = spyOn(valueTypeService, 'classify')
      .and.returnValues('object', 'string');

    const actual = service.tree({ a: 'b' });

    expect(classifySpy).toHaveBeenCalledTimes(2);
    expect(actual).toBeTruthy();
  });
});
