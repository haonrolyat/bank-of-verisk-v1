import { Component, OnInit, Input } from '@angular/core';
import { BankService } from '../bank.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  @Input() numberNew: number = 1;
  
  constructor(public bankService: BankService) { 
    console.log(bankService);
  }
  
  ngOnInit() {}

}