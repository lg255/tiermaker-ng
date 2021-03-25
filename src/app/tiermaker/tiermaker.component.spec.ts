import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiermakerComponent } from './tiermaker.component';

describe('TiermakerComponent', () => {
  let component: TiermakerComponent;
  let fixture: ComponentFixture<TiermakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiermakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiermakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
