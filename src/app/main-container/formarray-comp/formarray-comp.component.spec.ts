import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarrayCompComponent } from './formarray-comp.component';

describe('FormarrayCompComponent', () => {
  let component: FormarrayCompComponent;
  let fixture: ComponentFixture<FormarrayCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarrayCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarrayCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
