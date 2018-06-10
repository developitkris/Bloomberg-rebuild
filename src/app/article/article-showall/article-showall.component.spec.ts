import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleShowallComponent } from './article-showall.component';

describe('ArticleShowallComponent', () => {
  let component: ArticleShowallComponent;
  let fixture: ComponentFixture<ArticleShowallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleShowallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleShowallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
