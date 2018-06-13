import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.css']
})
export class AccountLoginComponent implements OnInit {
  @Input() childAccountLogin: Account[];
  @Output() clickSender = new EventEmitter();

  loginButtonClicked(accountToLogin: Account){
    this.clickSender.emit(accountToLogin);
  }

  constructor() { }

  ngOnInit() {
  }

}
