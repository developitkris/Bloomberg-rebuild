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

}
