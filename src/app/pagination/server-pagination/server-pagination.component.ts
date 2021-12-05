import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { Subscription } from 'rxjs';

import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { ServerPaginationJsonDatasource } from './server-pagination.datasource';

@Component({
  selector: 'app-server-pagination',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.scss']
})
export class ServerPaginationComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource: ServerPaginationJsonDatasource;
  displayedColumns = ['id', 'userId', 'title', 'body'];
  totalItems = 100;
  activePageIndex = 1;
  lastPageIndex: number;
  pageIndexesArray;
  defaultPageSize = 5; // no. of items to be displayed
  pageSizeOptionsArray = [10, 5, 13, 25];
  selectedPageSize: number = this.pageSizeOptionsArray[1];

  dataSourceSubscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonServ: JsonPlaceholderService) { }

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
  getPageIndexesArray(pageRange = 20) {
    this.lastPageIndex = pageRange;
    const pageVar = Array.from(Array(pageRange + 1).keys()).slice(1);
    if (this.lastPageIndex > this.defaultPageSize + 1) {
      this.pageIndexesArray = [1, 2, 3, 4, 5, '...', this.lastPageIndex];
    } else {
      this.pageIndexesArray = pageVar;
    }
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
    this.getPageIndexesArray(pageRange);
    this.getTableData();
  }

  onClickFirstPage(page: number): void {
    this.paginator.firstPage();
    this.activePageIndex = page;
    this.getTableData();
  }

  onClickPreviousPage(page: number): void {
    this.paginator.previousPage();
    this.activePageIndex = page;
    this.getTableData();
  }

  onClickCurrentPage(page: number): void {
    this.paginator.pageIndex = page - 1;
    this.activePageIndex = page;
    this.getTableData();
  }

  onClickNextPage(page: number): void {
    this.paginator.nextPage();
    this.activePageIndex = page;
    this.getTableData();
  }

  onClickLastPage(page: number): void {
    this.paginator.lastPage();
    this.activePageIndex = page;
    this.getTableData();
  }

}
