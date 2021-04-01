import { ValueTypeService } from './value-type.service';

describe('ValueTypeService', () => {
  let service: ValueTypeService;

  beforeEach(() => {
    service = new ValueTypeService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  [
    { value: undefined, expected: 'undefined' },
    { value: null, expected: 'null' },
    { value: '\0', expected: 'string' },
    { value: '\.', expected: 'string' },
    { value: /^[a-z]$/g, expected: 'object' },
    { value: 0, expected: 'number' },
    { value: -0, expected: 'number' },
    { value: 'a', expected: 'string' },
    { value: 'asd', expected: 'string' },
    { value: 2484684867486486.48867468748674894, expected: 'number' },
    { value: '2021-01-01T12:00:00.000000Z', expected: 'string' },
    { value: new Date(2021, 1, 1), expected: 'object' },
    { value: true, expected: 'boolean' },
    { value: false, expected: 'boolean' },
    { value: 'true', expected: 'string' },
    { value: 'false', expected: 'string' },
  ].forEach(testItem => {
    it(`should transform to type | value: "${testItem.value}" type: "${testItem.expected}"`, () => {
      const actual = service.classify(testItem.value);
      expect(actual).toEqual(testItem.expected);
    });
  });
});
