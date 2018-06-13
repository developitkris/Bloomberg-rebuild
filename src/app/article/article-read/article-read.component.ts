import { Component, OnInit, Input, Output } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  @Input() childArticleRead: Article[];
  // @Output() clickSender = new EventEmitter();

  // articleClicked(articleToRead: Article){
  //   this.clickSender.emit(articleToRead);
  // }

  // currentTitle = Article[].title = "";
  // authoredDate = new Date();
  // month: number = authoredDate.getMonth() + 1;
  // day: number = parseInt(this.authoredDate.getDay());
  // yea)r: number = parseInt(this.authoredDate.getFullYear());

  constructor( //to be added onto Article object's existing parameters
    public date: Date,
    public content: string //maybe an array of strings)
  ){}

  ngOnInit() {
  }

}
