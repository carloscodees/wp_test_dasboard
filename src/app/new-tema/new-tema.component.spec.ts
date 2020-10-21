import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTemaComponent } from './new-tema.component';

describe('NewTemaComponent', () => {
  let component: NewTemaComponent;
  let fixture: ComponentFixture<NewTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
