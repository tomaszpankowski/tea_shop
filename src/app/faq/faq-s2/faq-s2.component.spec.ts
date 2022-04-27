import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqS2Component } from './faq-s2.component';

describe('FaqS2Component', () => {
  let component: FaqS2Component;
  let fixture: ComponentFixture<FaqS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
