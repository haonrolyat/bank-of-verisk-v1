import { Component, OnInit, Input } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  balance: number;
  balanceFormatted: string = "$302.00";
  amount: number = 100;
  @Input() numberNew: number = 1;
  
  constructor(public bankService: BankService) { 
    console.log(bankService);
  }
  
  onDeposit(){
    this.bankService.deposit(this.numberNew);
    this.balance = this.bankService.getBalance();
    this.balanceFormatted = this.bankService.formatAsCurrency(this.balance);
  }

  onWithdraw(){
    this.bankService.withdraw(this.numberNew);
    this.balance = this.bankService.getBalance();
    this.balanceFormatted = this.bankService.formatAsCurrency(this.balance);
  }

  
   
  onGetTransactions(){
    this.bankService.account.getTransactions();
  }
 
  isShow: boolean  = false;
  changeShow(){
  this.isShow =  !this.isShow 
}

  ngOnInit() {}


}
