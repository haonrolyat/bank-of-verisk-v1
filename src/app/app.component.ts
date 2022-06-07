import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  bankName = 'Bank of ';
  account: any = {
    fname: 'Noah',
    lname: 'Taylor',
    age: 34,
    balance: 0.01,
    balanceFormatted: "$ 0.01",
    amount: 0.01,
    amountFormatted: "$0.01",
    transactions: [
      {
        date: '01-01-01',
        type: 'withdrawal',
        amount: 200.00,
        currency: 'usd'
      },
      {
        date: '02-02-02',
        type: 'deposit',
        amount: 100.00,
        currency: 'usd'
      },
      {
        date: '03-03-03',
        type: 'withdrawal',
        amount: 2.00,
        currency: 'usd'
      }
    ]
  };
}
