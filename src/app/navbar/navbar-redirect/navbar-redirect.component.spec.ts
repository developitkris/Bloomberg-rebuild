import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRedirectComponent } from './navbar-redirect.component';

describe('NavbarRedirectComponent', () => {
  let component: NavbarRedirectComponent;
  let fixture: ComponentFixture<NavbarRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
