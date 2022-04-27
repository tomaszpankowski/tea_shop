import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqS1Component } from './faq-s1.component';

describe('FaqS1Component', () => {
  let component: FaqS1Component;
  let fixture: ComponentFixture<FaqS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
