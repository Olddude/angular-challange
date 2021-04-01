import { Injectable } from '@angular/core';
import { ValueType } from '../../models/value-type';

@Injectable({ providedIn: 'root' })
export class ValueTypeService {
  classify(value: any): ValueType {
    return value !== null
      ? typeof value as ValueType
      : 'null';
  }
}
