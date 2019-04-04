import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhomePage } from './myhome.page';

describe('MyhomePage', () => {
  let component: MyhomePage;
  let fixture: ComponentFixture<MyhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
