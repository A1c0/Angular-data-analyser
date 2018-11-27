import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MnistImageComponent } from './mnist-image.component';

describe('MnistImageComponent', () => {
  let component: MnistImageComponent;
  let fixture: ComponentFixture<MnistImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MnistImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MnistImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
