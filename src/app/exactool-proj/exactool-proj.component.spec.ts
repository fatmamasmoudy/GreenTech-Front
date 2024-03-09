import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactoolProjComponent } from './exactool-proj.component';

describe('ExactoolProjComponent', () => {
  let component: ExactoolProjComponent;
  let fixture: ComponentFixture<ExactoolProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactoolProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExactoolProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
