import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfelseFormComponent } from './ifelse-form.component';

describe('IfelseFormComponent', () => {
  let component: IfelseFormComponent;
  let fixture: ComponentFixture<IfelseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfelseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfelseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
