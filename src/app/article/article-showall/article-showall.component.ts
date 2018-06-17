import { Component, OnInit, EventEmitter} from '@angular/core';
import { Article } from '../../models/article.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-article-showall',
  templateUrl: './article-showall.component.html',
  styleUrls: ['./article-showall.component.css']
})
export class ArticleShowallComponent implements OnInit{
  recentArticles: Article[];

  constructor(private router: Router) {
  }

  goToReadArticle(clickedArticle: Article) {
   this.router.navigate(['articles', clickedArticle.id]);
  };

  ngOnInit() {
  }
}
  // @Input() childArticleShowall: Article[];
  // @Output() clickSender = new EventEmitter();
  //
  // filterButtonClicked(filterToShow: Article){
  //   this.clickSender.emit(filterToShow);
  // }
  //
  // allArticles: Article[] = [];
  // recentArticles: Article[] = [];
  // topArticles: Article[] = [];
  // currentView = this.allArticles;
  // filterByView: string = "allArticles"; //default view
  //

  // articleSector(clicked){
  //   if (clicked ===1){
  //     return "POLITICS";
  //   } else if (clicked ===2){
  //     return "BUSINESS";
  //   } else if (clicked ===3){
  //     return "MARKETS";
  //   } else if (clicked ===4){
  //     return "PURSUITS";
  //   } else if (clicked ===5){
  //     return "ECONOMICS";
  //   } else if (clicked ===6){
  //     return "OPINION";
  //   } else {
  //     return "TECHNOLOGY";
  //   }
  // }
  //
  // toggleSelected(clickedArticle: Article, setSelected: boolean) {
  //   // clickedArticle.pure = setSelected;
  //   }
  // //method for filter change
  // onChange(optionSelected){
  //   this.filterByView = optionSelected;
  // }
