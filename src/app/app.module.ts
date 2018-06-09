import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { VideoShowComponent } from './video-show/video-show.component';
import { StockmarketUpdatesComponent } from './stockmarket-updates/stockmarket-updates.component';
import { SearchArticlesComponent } from './search-articles/search-articles.component';
import { SubscriptionCreateComponent } from './subscription-create/subscription-create.component';
import { ArticleSearchComponent } from './article-search/article-search.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { NavbarShowComponent } from './navbar-show/navbar-show.component';
import { QuicklinksRedirectComponent } from './quicklinks-redirect/quicklinks-redirect.component';
import { ArticleReadComponent } from './article-read/article-read.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleDetailsComponent,
    VideoShowComponent,
    StockmarketUpdatesComponent,
    SearchArticlesComponent,
    SubscriptionCreateComponent,
    ArticleSearchComponent,
    AccountLoginComponent,
    NavbarShowComponent,
    QuicklinksRedirectComponent,
    ArticleReadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
