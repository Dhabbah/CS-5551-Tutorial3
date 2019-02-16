import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionSearchComponent } from './nutritionsearch.component';

describe('NutritionSearchComponent', () => {
  let component: NutritionSearchComponent;
  let fixture: ComponentFixture<NutritionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionSearchComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
