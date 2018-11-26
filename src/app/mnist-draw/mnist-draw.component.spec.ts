import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistDrawComponent } from './mnist-draw.component';

describe('MnistDrawComponent', () => {
  let component: MnistDrawComponent;
  let fixture: ComponentFixture<MnistDrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnistDrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
