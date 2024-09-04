import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewOnePublicationComponent } from './overview-one-publication.component';

describe('OverviewOnePublicationComponent', () => {
  let component: OverviewOnePublicationComponent;
  let fixture: ComponentFixture<OverviewOnePublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewOnePublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewOnePublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
