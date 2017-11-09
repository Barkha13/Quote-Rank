import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuoteComponent implements OnInit {

  quotes = {
    quote : ' ',
    author : ' ',
    rating : 0
  }
  q_list:Array<object> = [];

  onClick(){
    this.q_list.push(this.quotes);
    console.log(this.q_list);
    this.quotes = {
      quote : ' ',
      author : ' ',
      rating : 0
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
