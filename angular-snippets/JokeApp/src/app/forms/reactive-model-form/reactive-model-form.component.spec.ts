import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelFormComponent } from './reactive-model-form.component';

describe('ReactiveModelFormComponent', () => {
  let component: ReactiveModelFormComponent;
  let fixture: ComponentFixture<ReactiveModelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveModelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactiveModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
