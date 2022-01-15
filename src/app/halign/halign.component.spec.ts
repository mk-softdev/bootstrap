import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalignComponent } from './halign.component';

describe('HalignComponent', () => {
  let component: HalignComponent;
  let fixture: ComponentFixture<HalignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
