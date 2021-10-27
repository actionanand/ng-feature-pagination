import { CollectionViewer, DataSource } from "@angular/cdk/collections";

import { of } from "rxjs";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";
import { catchError, finalize } from "rxjs/operators";

import { JsonData } from "../../model/json-placeholder.model";
import { JsonPlaceholderService } from "../../services/json-placeholder.service";


export class ServerPaginationJsonDatasource implements DataSource<JsonData>{

  private jsonDataSubject = new BehaviorSubject<JsonData[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private jsonDataServ: JsonPlaceholderService) {}

  loadJsonData(pageIndex = '0', pageSize = '5') {
    this.loadingSubject.next(true);
    this.jsonDataServ.findAllPosts(pageIndex, pageSize).pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(jsonData => this.jsonDataSubject.next(jsonData));
  }

  connect(collectionViewer: CollectionViewer): Observable<JsonData[]> {
    console.log("Connecting data source");
    return this.jsonDataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.jsonDataSubject.complete();
    this.loadingSubject.complete();
  }
}