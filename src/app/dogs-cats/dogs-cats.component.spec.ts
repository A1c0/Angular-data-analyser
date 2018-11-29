import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsCatsComponent } from './dogs-cats.component';

describe('DogsCatsComponent', () => {
  let component: DogsCatsComponent;
  let fixture: ComponentFixture<DogsCatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsCatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
