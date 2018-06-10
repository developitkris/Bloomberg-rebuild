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

  //filter types
  filterByRecent: string = "recentArticles";
  filterByTop: string = "topArticles";

chooseArticle(click){
  if (click ==true){
    return this.currentArticle;
  }
}

//choose filter type
onChange(optionSelected){
  this.filterByRecent = optionSelected;
  this.filterByTop = optionSelected;
}

  constructor() {
    public Boolean = false;
    //borrows from the Article constructor in Models
    }

  ngOnInit() {
  }

}
