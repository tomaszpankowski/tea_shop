import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoS3Component } from './info-s3.component';

describe('InfoS3Component', () => {
  let component: InfoS3Component;
  let fixture: ComponentFixture<InfoS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
