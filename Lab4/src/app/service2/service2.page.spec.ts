import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2Page } from './service2.page';
import {HttpClientModule} from '@angular/common/http';

describe('Service2Page', () => {
  let component: Service2Page;
  let fixture: ComponentFixture<Service2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Service2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Service2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
