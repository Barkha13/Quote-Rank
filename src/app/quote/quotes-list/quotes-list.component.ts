import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuotesListComponent implements OnInit {

  @Input() quoteList;

  voteUp(index){
    this.quoteList[index].rating ++;
  }

  voteDown(index){
    this.quoteList[index].rating --;
  }

  delete(index){
    this.quoteList.splice(index,1);
  }
  constructor() { }

  ngOnInit() {
  }

}
