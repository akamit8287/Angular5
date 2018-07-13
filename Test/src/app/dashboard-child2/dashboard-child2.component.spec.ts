import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChild2Component } from './dashboard-child2.component';

describe('DashboardChild2Component', () => {
  let component: DashboardChild2Component;
  let fixture: ComponentFixture<DashboardChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
