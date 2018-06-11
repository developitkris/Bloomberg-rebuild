import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: object = {};
  topNews: Articles[]= [
    new Article('G-7 Officials Toil Through Night to Paper Over Differences', 'Politics', 'author', '06/08/2018', 'image', 'content', 'links'),
    new Article('PG&E Equipment Tied to Some of the Deadliest Wine Country Fires', 'Business', 'author', '06/08/2018', 'image', 'content', 'links'),
    new Article('Muellers Manafort Case Just Got Stronger, Former Prosecutors Say', 'Politics', 'author', '06/08/2018', 'image', 'content', 'links'),
    new Article('The $300 Billion FAANG Surge Lives Another Week', 'Markets', 'author', '06/08/2018', 'image', 'content', 'links'),
    new Article('Disney Says Pixars John Lasseter Will Leave Company by Year-End', 'Business', 'author', '06/08/2018', 'image', 'content', 'links'),
  ];
  currentTitle: string = '';
  authoredDate = new Date();
  month: number = this.authoredDate.getMonth() + 1;
  day: number = this.authoredDate.getDay();
  year: number = this.authoredDate.getFullYear();

  
}
