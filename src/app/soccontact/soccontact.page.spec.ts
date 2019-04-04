import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccontactPage } from './soccontact.page';

describe('SoccontactPage', () => {
  let component: SoccontactPage;
  let fixture: ComponentFixture<SoccontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
