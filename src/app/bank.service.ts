// This is really the brains of the actions. Use this to maintain backend model 
// along with functions to be used across multiple components

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  bankService = "TEST";
  bankName = 'Bank of Verisk';
  account: any = {
    fname: 'Noah',
    lname: 'Taylor',
    age: 34,
    balance: 302.00,
    balanceFormatted: "$302.00",
    transactions: [
      {
        date: '03/06/2022 11:50:51 AM ',
        type: 'deposit',
        amount: 200.00,
        amountFormatted: "$200.00",
        balance: 302.00,
        balanceFormatted: "$302.00"
      },
      {
        date: '02/06/2022 11:50:51 AM ',
        type: 'deposit',
        amount: 100.00,
        amountFormatted: "$100.00",
        balance: 102.00,
        balanceFormatted: "$102.00"
      },
      {
        date: '01/06/2022 11:50:51 AM ',
        type: 'withdrawal',
        amount: 2.00,
        amountFormatted: "$2.00",
        balance: 2.00,
        balanceFormatted: "$2.00"
      }
    ]
  };
  getBalance(){
    return this.account.balance;
  }

  getBalanceFormatted(){
    return this.account.balanceFormatted;
  }
  
  // Used to format the time
  AddZero(num, isHours) {
    if (num > 12 && isHours){
      num = num - 12
    }
    return (num >= 0 && num < 10) ? "0" + num : num + "";
  }

  // Used to produce a formatted timestamp
  getDateTime(){
    const now = new Date();
    const strDateTime = [[this.AddZero(now.getDate(), false), 
        this.AddZero(now.getMonth() + 1, false), 
        now.getFullYear()].join("/"), 
        [this.AddZero(now.getHours(), true), 
        this.AddZero(now.getMinutes(), false),
        this.AddZero(now.getSeconds(), false)].join(":"), 
        now.getHours() >= 12 ? "PM" : "AM"].join(" ");
        return strDateTime;
    }

    formatAsCurrency(number){
      if (number < 0){
        return "("+Math.abs(number).toLocaleString('en-US', { style: 'currency', currency: 'USD' })+")";
      } else {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }}
  

  // Withdraw requires an update to the data model - i did have overdraw protection but took it off 
  // It can go negative
   withdraw(amount){
      this.account.balance -= amount;
      this.account.transactions.unshift({
      date: this.getDateTime(),
      type: 'withdraw',
      amount: amount,
      amountFormatted: this.formatAsCurrency(amount),
      balance: this.account.balance,
      balanceFormatted: this.formatAsCurrency(this.account.balance)
      });
    
  }

  // Deposit actions affect teh data model
  deposit(amount){
    this.account.balance += amount;
    this.account.transactions.unshift({
      date: this.getDateTime(),
      type: 'deposit',
      amount: amount,
      amountFormatted: this.formatAsCurrency(amount),
      balance: this.account.balance,
      balanceFormatted: this.formatAsCurrency(this.account.balance),
    })
    
  }
  // Get list of transactions used for tables
  getTransactions(){
    return this.account.transactions;
    
  }
  
 isShow: boolean  = false;
  changeShow(){
   this.isShow =  !this.isShow;
 }

  constructor() { }
}
