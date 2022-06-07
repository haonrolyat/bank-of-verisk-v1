import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HistoryComponent } from './history/history.component';

export const router: Routes = [
  { path: '', redirectTo: 'transaction', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'history', component: HistoryComponent }
];

// Use this block to get rid of a deprecated generaic error due to line 21
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

export const routes: ModuleWithProviders = RouterModule.forRoot(router);