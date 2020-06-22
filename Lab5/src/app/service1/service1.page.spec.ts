import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1Page } from './service1.page';
import {HttpClientModule} from '@angular/common/http';

describe('Service1Page', () => {
  let component: Service1Page;
  let fixture: ComponentFixture<Service1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
