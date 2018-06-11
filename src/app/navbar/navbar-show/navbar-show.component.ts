import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-navbar-show',
  templateUrl: './navbar-show.component.html',
  styleUrls: ['./navbar-show.component.css']
})
export class NavbarShowComponent implements OnInit {

  constructor(
    public read: string,
    public watch: string,
    public listen: string,
    public data: string,
    public sr: string,
    public follow: string,
    public subscribe: string
  ) {}

  ngOnInit() {
  }
  Home: NavbarShowComponent[] = [];
  Markets: NavbarShowComponent[] = [];
  Technology: NavbarShowComponent[] = [];
  Politics: NavbarShowComponent[] = [];
  Pursuits: NavbarShowComponent[] = [];
  Opinion: NavbarShowComponent[] = [];
  Businessweek: NavbarShowComponent[] = [];
  Video: NavbarShowComponent[] = [];
  Audio: NavbarShowComponent[] = [];
  Newsletters: NavbarShowComponent[] = [];
  Watchlist: NavbarShowComponent[] = [];
  Subscribe: NavbarShowComponent[] = [];
  Signin: NavbarShowComponent[] = [];
}
