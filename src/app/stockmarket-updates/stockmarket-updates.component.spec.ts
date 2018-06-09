import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmarketUpdatesComponent } from './stockmarket-updates.component';

describe('StockmarketUpdatesComponent', () => {
  let component: StockmarketUpdatesComponent;
  let fixture: ComponentFixture<StockmarketUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmarketUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmarketUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
