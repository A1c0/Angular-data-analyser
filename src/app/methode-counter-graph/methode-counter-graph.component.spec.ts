import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodeCounterGraphComponent } from './methode-counter-graph.component';

describe('MethodeCounterGraphComponent', () => {
  let component: MethodeCounterGraphComponent;
  let fixture: ComponentFixture<MethodeCounterGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodeCounterGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodeCounterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
