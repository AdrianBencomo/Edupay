import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPeriodComponent } from './all-period.component';

describe('AllPeriodComponent', () => {
  let component: AllPeriodComponent;
  let fixture: ComponentFixture<AllPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPeriodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
