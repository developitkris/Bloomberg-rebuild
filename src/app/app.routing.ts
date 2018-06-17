import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeedbackComponent }   from './feedback/feedback.component';
import { ArticleShowallComponent }   from './article/article-showall/article-showall.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'feedback',
   component: FeedbackComponent
 },
 {
    path: 'article-showall',
    component: ArticleShowallComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
