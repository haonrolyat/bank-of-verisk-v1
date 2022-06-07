import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { routes } from './app.router';
import { NavComponent } from './nav/nav.component';
import { HistoryComponent } from './history/history.component';
import { BankService } from './bank.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, routes ],
  declarations: [ AppComponent, TransactionComponent, NavComponent, HistoryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BankService]
})
export class AppModule { }
