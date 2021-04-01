import { Component } from '@angular/core';
import { TreeService } from '../../services/tree.service';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  source = environment.source;

  url$ = this.service.url();

  data$ = this.url$.pipe(
    mergeMap(url => this.service.fetch(url))
  );

  tree$ = this.data$.pipe(
    map(data => this.service.tree(data))
  );

  constructor(
    private readonly service: TreeService
  ) { }

}
