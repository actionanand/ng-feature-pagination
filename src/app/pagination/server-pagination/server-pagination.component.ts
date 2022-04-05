import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Subscription } from 'rxjs';

import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { ServerPaginationJsonDatasource } from './server-pagination.datasource';
import * as myKeyWords from '../../../assets/i18n/en.json';

@Component({
  selector: 'app-server-pagination',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.scss']
})
export class ServerPaginationComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'serverTitle'
  keyWordsObj: any = (myKeyWords as any).default;
  dataSource: ServerPaginationJsonDatasource;
  displayedColumns = ['sqNo', 'userId', 'title', 'body'];
  totalItems = 100;
  activePageIndex = 1;
  lastPageIndex: number;
  pageIndexesArray;
  defaultPageSize = 5; // no. of items to be displayed
  pageSizeOptionsArray = [10, 5, 13, 25];
  selectedPageSize: number = this.pageSizeOptionsArray[1];

  dataSourceSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonServ: JsonPlaceholderService) {  }

  ngOnInit(): void {
    this.getPageIndexesArray();
    this.dataSource = new ServerPaginationJsonDatasource(this.jsonServ);
    this.dataSource.loadJsonData(0, this.defaultPageSize);
  }

  ngAfterViewInit() {
    this.dataSourceSubscription = this.paginator.page.subscribe(() => {
      this.dataSource.loadJsonData(this.paginator.pageIndex, this.paginator.pageSize);
    });
  }

  ngOnDestroy(): void {
    this.dataSourceSubscription.unsubscribe();
  }

  // to generate page number array
  getPageIndexesArray(pageRange = 20, currentPage = 1, delta = 4) {
    this.lastPageIndex = pageRange;
    const range = [];
    // const pageVar = Array.from(Array(pageRange + 1).keys()).slice(1);
    // if (this.lastPageIndex > this.defaultPageSize + 1) {
    //   this.pageIndexesArray = [1, 2, 3, 4, 5, '...', this.lastPageIndex];
    // } else {
    //   this.pageIndexesArray = pageVar;
    // }

    for (let i = Math.max(2, (currentPage - delta)); i <= Math.min((this.lastPageIndex - 1), (currentPage + delta)); i += 1) {
      range.push(i); // [2, 3, 4, 5] 
    }
    // console.log('page range',pageRange, range);
    if ((currentPage - delta) > 2) {
      if (range.length === this.lastPageIndex - 3) {
        range.unshift(2);
      } else {
        range.unshift('...');
      }
    }

    if ((currentPage + delta) < (this.lastPageIndex - 1)) {
      if (range.length === this.lastPageIndex - 3) {
        range.push(this.lastPageIndex - 1);
      } else {
        range.push('...');
      }
    }

    range.unshift(1);
    if (this.lastPageIndex !== 1) {
      range.push(this.lastPageIndex);
    }
    this.pageIndexesArray = range;
  }

  getTableData() {
    this.dataSource.loadJsonData(this.paginator.pageIndex, this.paginator.pageSize);
  }

  getCurrentpage(): number {
    return this.activePageIndex;
  }

  onSetPageSizeOptions(pageSize = 5): void {
    const pageRange = Math.ceil(this.totalItems/pageSize);
    this.activePageIndex = 1;
    this.paginator.pageIndex = this.activePageIndex - 1;
    this.paginator.pageSize = pageSize;
    this.getPageIndexesArray(pageRange, this.activePageIndex);
    this.getTableData();
  }

  onClickFirstPage(page: number): void {
    this.paginator.firstPage();
    this.activePageIndex = page;
    this.getPageIndexesArray(this.lastPageIndex, this.activePageIndex);
    this.getTableData();
  }

  onClickPreviousPage(page: number): void {
    this.paginator.previousPage();
    this.activePageIndex = page;
    this.getPageIndexesArray(this.lastPageIndex, this.activePageIndex);
    this.getTableData();
  }

  onClickCurrentPage(page: number): void {
    this.paginator.pageIndex = page - 1;
    this.activePageIndex = page;
    this.getPageIndexesArray(this.lastPageIndex, this.activePageIndex);
    this.getTableData();
  }

  onClickNextPage(page: number): void {
    this.paginator.nextPage();
    this.activePageIndex = page;
    this.getPageIndexesArray(this.lastPageIndex, this.activePageIndex);
    this.getTableData();
  }

  onClickLastPage(page: number): void {
    this.paginator.lastPage();
    this.activePageIndex = page;
    this.getPageIndexesArray(this.lastPageIndex, this.activePageIndex);
    this.getTableData();
  }

}
