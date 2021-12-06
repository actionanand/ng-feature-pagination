import { Component, OnInit } from '@angular/core';

import * as myKeyWords from '../../../assets/i18n/en.json';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss']
})
export class UiPaginationComponent implements OnInit {

  keyWordsObj: any = (myKeyWords as any).default;

  curPage = 1;
  pageSize = 3; 

  list = [
    {name:'Prashobh',age:'minor'},
    {name:'Abraham',age:'adult'},
    {name:'Anil',age:'teen'},
    {name:'Sam',age:'major'},
    {name:'Philip',age:'aged'},
    {name:'Priya',age:'minor'},
    {name:'Anu',age:'teen'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  numberOfPages(){
    return Math.ceil(this.list.length / this.pageSize);
  };

}
