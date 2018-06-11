import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-showall',
  templateUrl: './article-showall.component.html',
  styleUrls: ['./article-showall.component.css']
})
export class ArticleShowallComponent implements OnInit {
  allArticles: Article[] = [];
  recentArticles: Article[] = [];
  topArticles: Article[] = [];
  currentView = this.allArticles;
  filterByView: string = "allArticles"; //default view

articleSector(clicked){
  if (clicked ===1){
    return "POLITICS";
  } else if (clicked ===2){
    return "BUSINESS";
  } else if (clicked ===3){
    return "MARKETS";
  } else if (clicked ===4){
    return "PURSUITS";
  } else if (clicked ===5){
    return "ECONOMICS";
  } else if (clicked ===6){
    return "OPINION";
  } else {
    return "TECHNOLOGY";
  }
}

toggleSelected(clickedArticle: Article, setSelected: boolean) {
    clickedArticle.pure = setSelected;
  }
//method for filter change
onChange(optionSelected){
  this.filterByView = optionSelected;
}

  constructor() {
    public Boolean = false;
    //borrows from the Article constructor in Models
    }

  ngOnInit() {
  }

}
