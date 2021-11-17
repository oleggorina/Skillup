import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleItemComponent } from './sample-item.component';

describe('SampleItemComponent', () => {
  let component: SampleItemComponent;
  let fixture: ComponentFixture<SampleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
