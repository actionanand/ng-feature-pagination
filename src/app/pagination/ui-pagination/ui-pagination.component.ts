import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss']
})
export class UiPaginationComponent implements OnInit {

  title = "UI Side Pagination";

  curPage = 1;
  pageSize = 3; 

  list = [
    {name:'Prashobh',age:'25'},
    {name:'Abraham',age:'35'},
    {name:'Anil',age:'29'},
    {name:'Sam',age:'40'},
    {name:'Philip',age:'32'},
    {name:'Priya',age:'27'},
    {name:'Anu',age:'20'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  numberOfPages(){
    return Math.ceil(this.list.length / this.pageSize);
  };

}
