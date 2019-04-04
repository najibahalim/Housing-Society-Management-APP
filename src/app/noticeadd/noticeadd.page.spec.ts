import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeaddPage } from './noticeadd.page';

describe('NoticeaddPage', () => {
  let component: NoticeaddPage;
  let fixture: ComponentFixture<NoticeaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
