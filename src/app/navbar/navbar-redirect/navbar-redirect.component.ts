import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-navbar-redirect',
  templateUrl: './navbar-redirect.component.html',
  styleUrls: ['./navbar-redirect.component.css']
})
export class NavbarRedirectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
