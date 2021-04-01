import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './components/tree/tree.component';
import { TreeRoutingModule } from './tree-routing.module';
import { TreeNodeComponent } from './components/tree-node/tree-node.component';


@NgModule({
  declarations: [
    TreeComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    TreeRoutingModule
  ]
})
export class TreeModule { }
