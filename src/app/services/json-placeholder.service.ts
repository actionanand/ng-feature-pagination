import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { JsonData } from '../model/json-placeholder.model';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor(private http: HttpClient) { }

  findAllPosts(pageIndex = '0', pageSize = '5') {
    return this.http.get<JsonData[]>('https://jsonplaceholder.typicode.com/posts', {
      params: new HttpParams()
        .set('_page', pageIndex)
        .set('_limit', pageSize)
    }).pipe(map(resp => resp));
  }

}
