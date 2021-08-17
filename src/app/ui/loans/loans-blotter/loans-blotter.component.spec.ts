import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansBlotterComponent } from './loans-blotter.component';

describe('LoansBlotterComponent', () => {
  let component: LoansBlotterComponent;
  let fixture: ComponentFixture<LoansBlotterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansBlotterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansBlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
