import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewPublicationsComponent } from './overview-publications.component';

describe('OverviewPublicationsComponent', () => {
  let component: OverviewPublicationsComponent;
  let fixture: ComponentFixture<OverviewPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewPublicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
