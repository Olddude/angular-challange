import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TreeComponent } from './tree.component';
import { TreeService } from '../../services/tree.service';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeComponent ],
      providers: [
        {
          provide: TreeService,
          useFactory: () => ({
            fetch: () => of({}),
            tree: () => ({}),
            url: () => of('')
          })
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
