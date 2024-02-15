import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllParentComponent } from './all-parent.component';

describe('AllParentComponent', () => {
  let component: AllParentComponent;
  let fixture: ComponentFixture<AllParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
