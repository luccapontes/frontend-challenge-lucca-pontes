import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class List {
  _id: number;
  code: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class HolidaysListService {

  endpointCountries = 'https://api.m3o.com/v1/holidays/Countries'
  endpointHolidays = 'https://api.m3o.com/v1/holidays/List'
  public headers: HttpHeaders

  constructor(private httpClient: HttpClient) { }

  token() {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer NDZjN2I3MmQtNzUwOC00OGIzLWIxZGQtMmQ3OGQxY2I1YjQ5' })
  }

  public get(): Promise<any> {

    this.token()

    let promise = new Promise(async (resolve) => {

      try {

        this.httpClient.get(
          this.endpointCountries,
          {
            headers: this.headers
          }
        ).subscribe(async (res: any) => {
          resolve(res);

        }, async (error) => {
          console.log('api erro', error);
        });
      } catch (error) {
        console.log('api erro', error);
      }
    });

    return promise;
  }

  public getHolidays(dados = {}): Promise<any> {
    this.token()

    let promise = new Promise(async (resolve) => {

      try {

        this.httpClient.get(
          this.endpointHolidays,
          {
            params: dados,
            headers: this.headers
          }
        ).subscribe(async (res: any) => {
          resolve(res);
        }, async (error) => {
          console.log('api erro', error);
        });
      } catch (error) {
        console.log('api erro', error);
      }
    });

    return promise;
  }
}
