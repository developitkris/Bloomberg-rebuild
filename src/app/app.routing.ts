import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FeedbackComponent }   from './feedback/feedback.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'feedback',
   component: FeedbackComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
