import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {
  // @Input() childArticleSearch: Article[];
  // @Output() clickSender = new EventEmitter();
  //
  // searchButtonClicked(articleToSearch: Article){
  //   this.clickSender.emit(articleToSearch);
  // }

  constructor() { }

  ngOnInit() {
  }

}
