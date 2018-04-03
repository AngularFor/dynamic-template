import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm01Component } from './dynamic-form01.component';

describe('DynamicForm01Component', () => {
  let component: DynamicForm01Component;
  let fixture: ComponentFixture<DynamicForm01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicForm01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicForm01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
