import { Component, EventEmitter} from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-showall',
  templateUrl: './article-showall.component.html',
  styleUrls: ['./article-showall.component.css']
})
export class ArticleShowallComponent {
  let articles: Article[] = [
  new Article("Merkel Fate Hangs in Balance With Asylum Policy Deadline", "Economics", "Brian Parkin", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHbcunkLaHaM/v1/1000x-1.jpg", "https://www.bloomberg.com/news/articles/2018-06-17/merkel-fate-hangs-in-balance-as-csu-is-said-to-hand-her-deadline", 1),
  new Article("Democrats Run to the Border to Decry Trump's Splitting of Families", "Politics", "Jennifer Epstein", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i1Nqbub5D6Jw/v0/800x-1.jpg", "https://www.bloomberg.com/news/articles/2018-06-17/trump-s-family-separations-draw-democrats-to-mexican-border", 2),
  new Article("Iran Says Three OPEC Members to Veto Saudi-Proposed Supply Boost", "Business", "Grant Smith", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irkUMuicnBlI/v0/200x-1.jpg", "https://www.bloomberg.com/news/articles/2018-06-17/iran-says-three-opec-members-to-veto-saudi-proposed-supply-boost", 3),
  new Article("Bitcoin Could Break the Internet, Central Banks' Overseer Says", "Technology", "Edward Robinson", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iqMH0jTEbh1U/v1/800x-1.jpg", "https://www.bloomberg.com/news/articles/2018-06-17/bitcoin-could-break-the-internet-central-banks-overseer-says", 4),
  new Article("Quiet Surface Masks Hints of Fervor in Stocks", "Markets", "Sarah Ponczek", "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ijmT5GGVBEVA/v1/1000x-1.jpg", "https://www.bloomberg.com/news/articles/2018-06-15/speculative-fervor-builds-at-fringe-of-a-quiet-week-for-s-p-500", 5)

]
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
  // constructor(
  //   public boolean = false,
  // ) { } //borrows from the Article constructor in Models
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
  ngOnInit() {
  }
