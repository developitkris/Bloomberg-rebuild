import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  articleId: number = null;
  // @Output() clickSender = new EventEmitter();

  // articleClicked(articleToRead: Article){
  //   this.clickSender.emit(articleToRead);
  // }

  // currentTitle = Article[].title = "";
  // authoredDate = new Date();
  // month: number = authoredDate.getMonth() + 1;
  // day: number = parseInt(this.authoredDate.getDay());
  // yea)r: number = parseInt(this.authoredDate.getFullYear());

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    public date: Date,
    public content: string[] //maybe an array of strings)
  ){}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.articleId = parseInt(urlParameters['id']);
  });
  }

}
