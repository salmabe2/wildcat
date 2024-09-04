import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewStudyAreasComponent } from './overview-study-areas.component';

describe('OverviewStudyAreasComponent', () => {
  let component: OverviewStudyAreasComponent;
  let fixture: ComponentFixture<OverviewStudyAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewStudyAreasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewStudyAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
