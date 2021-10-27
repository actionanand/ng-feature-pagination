import { AfterViewInit, Component, OnInit } from '@angular/core';

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

  constructor(private jsonServ: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.dataSource = new ServerPaginationJsonDatasource(this.jsonServ);
    this.dataSource.loadJsonData('0', '5')
  }

  ngAfterViewInit() {

  }

}
