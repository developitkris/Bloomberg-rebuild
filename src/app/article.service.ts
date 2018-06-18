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

  getArticleById(articleId: number){
    if (recentArticles){
      for(let i=0; i<=recentArticles.length-1; i++){
        if(recentArticles[i].id ===articleId){
          return recentArticles[i];
        }
      }
    } else {
      for(let i=0; i<=topNews.length-1; i++){
        if(topNews[i].id ===articleId){
          return topNews[i];
        }
      }
    }
  }

  }
