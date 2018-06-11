import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: object = {}; //user's chosen type & behavior(component)
  titles: Articles[] = [];
  authors: Articles[] = [];
  sectors: Articles[] = [];
  
  topNews: Article[]= [
    new Article('Trump Advisers Slam Trudeaus Betrayal Days Before Kim Summit', 'Politics', 'Mark Niquette', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilHpV14unnK4/v0/800x600.jpg', 'https://www.bloomberg.com/news/articles/2018-06-10/kudlow-blames-trudeau-for-betrayal-before-north-korea-talks'),
    new Article('G-7 Officials Toil Through Night to Paper Over Differences', 'Politics', 'Jennifer Epstein', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iAbOO3CZqDHY/v2/-1x-1.jpg', 'https://www.bloomberg.com/news/articles/2018-06-09/g-7-officials-toil-through-night-to-paper-over-differences'),
    new Article('Asia Stocks See Muted Start to Week; Dollar Drifts: Markets Wrap', 'Markets', 'Cormac Mullen', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iw4tW5PUtL6I/v0/270x203.jpg', 'https://www.bloomberg.com/news/articles/2018-06-10/asia-stocks-see-muted-start-to-week-dollar-drifts-markets-wrap'),
    new Article('Mueller Bolsters Manafort Case With Charges of Suspected Spy', 'Politics', 'Andrew M. Harris', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iulbYPy2oQ.0/v1/-1x-1.jpg', 'https://www.bloomberg.com/news/articles/2018-06-08/manafort-s-ukraine-fixer-indicted-by-u-s-special-counsel'),
    new Article('Brace for the World Economy’s Most Important Week of the Year', 'Business', 'Simon Kennedy', 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieOE9HIamkOk/v0/620x-1.jpg', 'https://www.bloomberg.com/news/articles/2018-06-10/brace-for-the-world-economy-s-most-important-week-of-the-year')
  ];
  currentTitle: string = '';
}
