import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistGraphComponent } from './mnist-graph.component';

describe('MnistGraphComponent', () => {
  let component: MnistGraphComponent;
  let fixture: ComponentFixture<MnistGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnistGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
