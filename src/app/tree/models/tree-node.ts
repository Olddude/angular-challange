import { ValueType } from './value-type';

export interface TreeNode {
  [key: string]: any;
  label?: string;
  value?: any;
  valueType?: ValueType;
  children?: TreeNode[];
}
