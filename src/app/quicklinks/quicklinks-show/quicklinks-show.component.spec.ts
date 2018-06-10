import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinksShowComponent } from './quicklinks-show.component';

describe('QuicklinksShowComponent', () => {
  let component: QuicklinksShowComponent;
  let fixture: ComponentFixture<QuicklinksShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuicklinksShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklinksShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
