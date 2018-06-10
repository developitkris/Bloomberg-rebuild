import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarShowComponent } from './navbar-show.component';

describe('NavbarShowComponent', () => {
  let component: NavbarShowComponent;
  let fixture: ComponentFixture<NavbarShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
