import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css']
})
export class ArticleNewComponent implements OnInit {
  @Input() childArticleNew: Article[];
  @Output() clickSender = new EventEmitter();

  //dynamically add new articles via API
  
  constructor() { }

  ngOnInit() {
  }

}
