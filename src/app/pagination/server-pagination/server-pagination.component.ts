import { Component, OnInit } from '@angular/core';

import { JsonPlaceholderService } from '../../services/json-placeholder.service';

@Component({
  selector: 'app-server-pagination',
  templateUrl: './server-pagination.component.html',
  styleUrls: ['./server-pagination.component.scss']
})
export class ServerPaginationComponent implements OnInit {

  constructor(private jsonServ: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.jsonServ.findAllPosts().subscribe(res => {
      console.log(res);
    });
  }

}
