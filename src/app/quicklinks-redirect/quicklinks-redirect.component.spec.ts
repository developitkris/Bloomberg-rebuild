import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinksRedirectComponent } from './quicklinks-redirect.component';

describe('QuicklinksRedirectComponent', () => {
  let component: QuicklinksRedirectComponent;
  let fixture: ComponentFixture<QuicklinksRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicklinksRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklinksRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
