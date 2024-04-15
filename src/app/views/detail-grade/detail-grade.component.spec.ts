import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGradeComponent } from './detail-grade.component';

describe('DetailGradeComponent', () => {
  let component: DetailGradeComponent;
  let fixture: ComponentFixture<DetailGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailGradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
