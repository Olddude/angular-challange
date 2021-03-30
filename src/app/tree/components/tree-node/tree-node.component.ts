import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../../models/tree-node';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent {

  @Input() model: TreeNode;

  valueType(value: any): string {
    return typeof value;
  }

}
