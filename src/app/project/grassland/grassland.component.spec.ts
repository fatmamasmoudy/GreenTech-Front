import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrasslandComponent } from './grassland.component';

describe('GrasslandComponent', () => {
  let component: GrasslandComponent;
  let fixture: ComponentFixture<GrasslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrasslandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrasslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
