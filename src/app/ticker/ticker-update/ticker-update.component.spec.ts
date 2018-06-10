import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerUpdateComponent } from './ticker-update.component';

describe('TickerUpdateComponent', () => {
  let component: TickerUpdateComponent;
  let fixture: ComponentFixture<TickerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
