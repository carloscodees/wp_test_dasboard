import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOptionsComponent } from './new-options.component';

describe('NewOptionsComponent', () => {
  let component: NewOptionsComponent;
  let fixture: ComponentFixture<NewOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
