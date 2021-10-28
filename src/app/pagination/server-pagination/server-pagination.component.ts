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

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private jsonServ: JsonPlaceholderService) { }

  ngOnInit(): void {
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

}
