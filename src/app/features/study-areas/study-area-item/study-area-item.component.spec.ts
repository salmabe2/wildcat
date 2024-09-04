import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyAreaItemComponent } from './study-area-item.component';

describe('StudyAreaItemComponent', () => {
  let component: StudyAreaItemComponent;
  let fixture: ComponentFixture<StudyAreaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyAreaItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudyAreaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
