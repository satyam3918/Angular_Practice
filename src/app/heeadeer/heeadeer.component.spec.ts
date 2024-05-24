import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeeadeerComponent } from './heeadeer.component';

describe('HeeadeerComponent', () => {
  let component: HeeadeerComponent;
  let fixture: ComponentFixture<HeeadeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeeadeerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeeadeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
