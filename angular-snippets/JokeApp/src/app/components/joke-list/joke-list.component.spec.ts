import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeListComponent } from './joke-list.component';

describe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokeListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
