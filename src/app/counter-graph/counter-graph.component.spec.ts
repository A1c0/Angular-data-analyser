import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGraphComponent } from './counter-graph.component';

describe('CounterGraphComponent', () => {
  let component: CounterGraphComponent;
  let fixture: ComponentFixture<CounterGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
