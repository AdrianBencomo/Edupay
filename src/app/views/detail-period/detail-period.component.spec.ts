import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPeriodComponent } from './detail-period.component';

describe('DetailPeriodComponent', () => {
  let component: DetailPeriodComponent;
  let fixture: ComponentFixture<DetailPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPeriodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
