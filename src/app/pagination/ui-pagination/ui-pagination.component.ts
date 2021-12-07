import { Component, OnInit } from '@angular/core';

import { LanguagesService } from '../../services/languages.service';

import * as myKeyWords from '../../../assets/i18n/en.json';

@Component({
  selector: 'app-ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss']
})
export class UiPaginationComponent implements OnInit {

  keyWordsObj: any = (myKeyWords as any).default;

  myLang = 'en';

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

  constructor(private langServ: LanguagesService) { }

  ngOnInit(): void {
    this.langServ.language$.subscribe(lang => this.myLang = lang);
  }

  numberOfPages(){
    return Math.ceil(this.list.length / this.pageSize);
  };

}
