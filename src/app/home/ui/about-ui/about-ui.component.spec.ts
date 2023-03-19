import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUiComponent } from './about-ui.component';

describe('AboutUiComponent', () => {
  let component: AboutUiComponent;
  let fixture: ComponentFixture<AboutUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
