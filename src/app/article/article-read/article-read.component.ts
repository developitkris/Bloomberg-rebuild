import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  currentTitle = this.Article[].title = "";
  authoredDate = new Date();
  month: number = this.authoredDate.getMonth() + 1;
  day: number = this.authoredDate.getDay();
  year: number = this.authoredDate.getFullYear();

  constructor( //to be added onto Article object's existing parameters
    public date: Date,
    public content: string //maybe an array of strings)
  ){}

  ngOnInit() {
  }

}
