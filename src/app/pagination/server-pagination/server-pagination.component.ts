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
  activePageIndex = 1;
  lastPageIndex: number;
  pageIndexesArray;
  defaultPageSize = 5; // no. of items to be displayed

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonServ: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.getPageIndexesArray();
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

  // to generate page number, here as no api data give page range, so it's taken as 20
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
