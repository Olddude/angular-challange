import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TreeComponent } from './tree.component';
import { TreeService } from '../../services/tree/tree.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UrlService } from '../../services/url/url.service';
import { FetchService } from '../../services/fetch/fetch.service';

describe('TreeComponent', () => {
  let component: TreeComponent;
  let fixture: ComponentFixture<TreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeComponent ],
      providers: [
        {
          provide: UrlService,
          useFactory: () => ({ url: () => of('') })
        },
        {
          provide: FetchService,
          useFactory: () => ({ fetch: () => of({}) })
        },
        {
          provide: TreeService,
          useFactory: () => ({ tree: () => ({}) })
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
