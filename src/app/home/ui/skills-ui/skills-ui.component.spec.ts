import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsUiComponent } from './skills-ui.component';

describe('SkillsUiComponent', () => {
  let component: SkillsUiComponent;
  let fixture: ComponentFixture<SkillsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
