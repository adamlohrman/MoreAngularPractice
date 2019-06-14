import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputerComponent } from './inputer.component';

describe('InputerComponent', () => {
  let component: InputerComponent;
  let fixture: ComponentFixture<InputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
