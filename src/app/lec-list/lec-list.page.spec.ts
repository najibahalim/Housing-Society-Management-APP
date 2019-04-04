import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecListPage } from './lec-list.page';

describe('LecListPage', () => {
  let component: LecListPage;
  let fixture: ComponentFixture<LecListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
