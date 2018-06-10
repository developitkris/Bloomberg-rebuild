import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SelectedPipe } from './selected.pipe';

import { AccountCreateComponent } from './account/account-create/account-create.component';
import { AccountLoginComponent } from './account/account-login/account-login.component';
import { ArticleShowallComponent } from './article/article-showall/article-showall.component';
import { ArticleReadComponent } from './article/article-read/article-read.component';
import { ArticleSearchComponent } from './article/article-search/article-search.component';
import { ArticleNewComponent } from './article/article-new/article-new.component';
import { NavbarShowComponent } from './navbar/navbar-show/navbar-show.component';
import { NavbarRedirectComponent } from './navbar/navbar-redirect/navbar-redirect.component';
import { QuicklinksShowComponent } from './quicklinks/quicklinks-show/quicklinks-show.component';
import { QuicklinksRedirectComponent } from './quicklinks/quicklinks-redirect/quicklinks-redirect.component';
import { VideoShowallComponent } from './video/video-showall/video-showall.component';
import { VideoPlayComponent } from './video/video-play/video-play.component';
import { TickerUpdateComponent } from './ticker/ticker-update/ticker-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountCreateComponent,
    AccountLoginComponent,
    ArticleShowallComponent,
    ArticleReadComponent,
    ArticleSearchComponent,
    ArticleNewComponent,
    NavbarShowComponent,
    NavbarRedirectComponent,
    QuicklinksShowComponent,
    QuicklinksRedirectComponent,
    VideoShowallComponent,
    VideoPlayComponent,
    TickerUpdateComponent,
    SelectedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
