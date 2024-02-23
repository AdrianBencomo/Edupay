import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExpenseComponent } from './all-expense.component';

describe('AllExpenseComponent', () => {
  let component: AllExpenseComponent;
  let fixture: ComponentFixture<AllExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllExpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
