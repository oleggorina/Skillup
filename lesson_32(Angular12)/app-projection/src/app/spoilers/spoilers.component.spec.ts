import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpoilersComponent } from './spoilers.component';

describe('SpoilersComponent', () => {
  let component: SpoilersComponent;
  let fixture: ComponentFixture<SpoilersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpoilersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoilersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
