import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-ticker-update',
  templateUrl: './ticker-update.component.html',
  styleUrls: ['./ticker-update.component.css']
})
export class TickerUpdateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
