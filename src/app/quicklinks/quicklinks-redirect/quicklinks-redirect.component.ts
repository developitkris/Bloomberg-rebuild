import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-quicklinks-redirect',
  templateUrl: './quicklinks-redirect.component.html',
  styleUrls: ['./quicklinks-redirect.component.css']
})
export class QuicklinksRedirectComponent implements OnInit {
  // @Input() childQuicklinksRedirect: Page[];
  // @Output() clickSender = new EventEmitter();
  //
  // linkClicked(pageToGo: Page){
  //   this.clickSender.emit(pageToGo);
  // }
  constructor() { }

  ngOnInit() {
  }

}
