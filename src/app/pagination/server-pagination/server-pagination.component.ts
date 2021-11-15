import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { JsonPlaceholderService } from '../../services/json-placeholder.service';
import { ServerPaginationJsonDatasource } from './server-pagination.datasource';

@Component({
  selector: 'app-server-pagination',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.scss']
})
export class ServerPaginationComponent implements OnInit, AfterViewInit {

  dataSource: ServerPaginationJsonDatasource;
  displayedColumns = ['id', 'userId', 'title', 'body'];
  pageRange: number;
  pages;
  activePage = 1;
  defaultPageSize = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonServ: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.getPageRangeArray();
    this.dataSource = new ServerPaginationJsonDatasource(this.jsonServ);
    this.dataSource.loadJsonData(0, 5)
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      // console.log(this.paginator.pageIndex);
      // console.log(this.paginator.pageSize);
      this.dataSource.loadJsonData(this.paginator.pageIndex, this.paginator.pageSize);
    });
  }

  // to generate page number
  getPageRangeArray(pageRange = 10) {
    this.pageRange = pageRange;
    const pageVar = Array.from(Array(pageRange + 1).keys()).slice(1);
    if (this.pageRange > this.defaultPageSize + 1) {
      this.pages = [1, 2, 3, 4, 5, '...', this.pageRange];
    } else {
      this.pages = pageVar;
    }
  }

  getTableData() {
    this.dataSource.loadJsonData(this.paginator.pageIndex, this.paginator.pageSize);
  }

  appFirstPage(page: number): void {
    this.paginator.firstPage();
    this.activePage = page;
    this.getTableData();
  }

  getCurrentpage(): number {
    return this.activePage;
  }

  appPreviousPage(page: number): void {
    this.paginator.previousPage();
    this.activePage = page;
    this.getTableData();
  }

  appCurrentPage(page: number): void {
    this.paginator.pageIndex = page - 1;
    this.activePage = page;
    this.getTableData();
  }

  appNextPage(page: number): void {
    this.paginator.nextPage();
    this.activePage = page;
    this.getTableData();
  }

  appLastPage(page: number): void {
    this.paginator.lastPage();
    this.activePage = page;
    this.getTableData();
  }

}
