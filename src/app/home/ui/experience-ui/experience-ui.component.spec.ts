import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceUiComponent } from './experience-ui.component';

describe('ExperienceUiComponent', () => {
  let component: ExperienceUiComponent;
  let fixture: ComponentFixture<ExperienceUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
