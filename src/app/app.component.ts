import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: object = {}; //user's chosen type & behavior(component)
  topNews: Articles[]= [
    new Article('G-7 Officials Toil Through Night to Paper Over Differences', 'Politics', 'author', 'image', 'links'),
    new Article('PG&E Equipment Tied to Some of the Deadliest Wine Country Fires', 'Business', 'author', 'image', 'links'),
    new Article('Muellers Manafort Case Just Got Stronger, Former Prosecutors Say', 'Politics', 'author', 'image', 'links'),
    new Article('The $300 Billion FAANG Surge Lives Another Week', 'Markets', 'author', 'image', 'links'),
    new Article('Disney Says Pixars John Lasseter Will Leave Company by Year-End', 'Business', 'author', 'image', 'links'),
  ];
  currentTitle: string = '';
}
