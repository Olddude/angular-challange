import { Component, Input } from '@angular/core';
import { TreeNode } from '../../models/tree-node';

@Component({
  selector: 'app-tree-node',
  template: `
    <ng-container *ngIf="!model?.children">
      <section class="form-row">
        <label class="label">{{model?.label}}</label>
        <ng-container [ngSwitch]="model?.valueType">
          <input *ngSwitchCase="'number'"
                class="value" type="number" [value]="model?.value"
                readonly disabled>
          <input *ngSwitchCase="'boolean'"
                  class="value" type="checkbox" [checked]="model?.value"
                  readonly disabled>
          <input *ngSwitchDefault
                class="value" type="text" [value]="model?.value"
                readonly disabled>
        </ng-container>
      </section>
    </ng-container>
    <ng-container *ngIf="model?.children && model?.children.length > 0">
      <section class="form-row">
        <label class="label">{{model?.label}}</label>
        <div class="children">
          <app-tree-node class="child"
                        *ngFor="let child of model?.children"
                        [model]="child"></app-tree-node>
        </div>
      </section>
    </ng-container>
  `
})
export class TreeNodeComponent {
  @Input() model: TreeNode;
}
