import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  // @Input() childAccountCreate: Account[];
  // @Output() clickSender = new EventEmitter();
  //
  // subscribeButtonClicked(accountToCreate: Account){
  //   this.clickSender.emit(accountToCreate);
  // }

  constructor() { }

  ngOnInit() {
  }

}
