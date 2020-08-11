import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTaskCardComponent } from './one-task-card.component';

describe('OneTaskCardComponent', () => {
  let component: OneTaskCardComponent;
  let fixture: ComponentFixture<OneTaskCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTaskCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
