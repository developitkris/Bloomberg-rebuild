import { Injectable } from '@angular/core';
import { Article } from './models/article.model';
import { recentArticles } from './sample-articles';
import { topNews } from './sample-articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles() {
    return (recentArticles && topNews);
  }

  getRecentById(articleId: number){
    for(let i=0; i<=recentArticles.length-1; i++){
      if(recentArticles[i].id ===articleId){
        return recentArticles[i];
      }
    }
  }
  getTopById(articleId: number){
    for(let i=0; i<=topNews.length-1; i++){
      if(topNews[i].id ===articleId){
        return topNews[i];
      }
    }
  }

}
