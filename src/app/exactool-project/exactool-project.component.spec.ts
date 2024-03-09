import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactoolProjectComponent } from './exactool-project.component';

describe('ExactoolProjectComponent', () => {
  let component: ExactoolProjectComponent;
  let fixture: ComponentFixture<ExactoolProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactoolProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExactoolProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
