import { Component } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: object = {}; //user's chosen type & behavior(component)
  // titles: Articles[] = [];
  // authors: Articles[] = [];
  // sectors: Articles[] = [];
  topNews: Article[];
  currentTitle: string = '';
}
