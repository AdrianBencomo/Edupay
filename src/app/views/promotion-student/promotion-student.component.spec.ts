import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionStudentComponent } from './promotion-student.component';

describe('PromotionStudentComponent', () => {
  let component: PromotionStudentComponent;
  let fixture: ComponentFixture<PromotionStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromotionStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
