import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm02Component } from './dynamic-form02.component';

describe('DynamicForm02Component', () => {
  let component: DynamicForm02Component;
  let fixture: ComponentFixture<DynamicForm02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicForm02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicForm02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
