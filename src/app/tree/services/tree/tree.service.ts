import { Injectable } from '@angular/core';
import { TreeNode } from 'src/app/tree/models/tree-node';
import { ValueTypeService } from '../value-type/value-type.service';

@Injectable({ providedIn: 'root' })
export class TreeService {

  tree(value: any, label?: string): TreeNode {
    const valueType = this.valueTypeService.classify(value);
    const children = valueType === 'object'
      ? Object
        .entries(value)
        .map(entry => ({ label: entry[0], value: entry[1], valueType }))
      : [];
    const hasChildren = children.length > 0;
    let tree: TreeNode = { label, value };
    if (hasChildren) {
      tree = {
        ...tree,
        children: children.map(childEntry => {
          return this.tree(childEntry.value, childEntry.label);
        })
      };
    }
    return tree;
  }

  constructor(
    private readonly valueTypeService: ValueTypeService
  ) { }

}
