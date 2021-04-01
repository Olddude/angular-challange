import { Injectable } from '@angular/core';
import { TreeNode } from 'src/app/tree/models/tree-node';

@Injectable({ providedIn: 'root' })
export class TreeService {

  children(value: any): any[] {
    return !!value && typeof value === 'object'
      ? Object.entries(value)
              .map(entry => ({ label: entry[0], value: entry[1] }))
      : [];
  }

  tree(value: any, label?: string): TreeNode {
    const children = this.children(value);
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

}
