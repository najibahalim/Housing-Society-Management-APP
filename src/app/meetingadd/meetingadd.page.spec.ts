import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingaddPage } from './meetingadd.page';

describe('MeetingaddPage', () => {
  let component: MeetingaddPage;
  let fixture: ComponentFixture<MeetingaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingaddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
