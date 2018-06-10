import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-showall',
  templateUrl: './article-showall.component.html',
  styleUrls: ['./article-showall.component.css']
})
export class ArticleShowallComponent implements OnInit {
  allArticles: Article[] = [];
  recentArticles: Article[] = [];
  topArticles: Article[] = [];
  currentArticle: object = {};

chooseArticle(click){
  if (click ==true){
    return this.currentArticle;
  }
}
  constructor() {
    public Boolean = false;
    //borrows from the Article constructor in Models
    }

  ngOnInit() {
  }

}
