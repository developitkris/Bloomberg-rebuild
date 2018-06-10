import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoShowallComponent } from './video-showall.component';

describe('VideoShowallComponent', () => {
  let component: VideoShowallComponent;
  let fixture: ComponentFixture<VideoShowallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoShowallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoShowallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
