import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the GetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetServiceProvider {

  constructor(public http: Http) {
    console.log('Hello GetServiceProvider Provider');
  }

  private getChatsData() {
    var url = "http://localhost:8000/tors/";
    return this.http
    .get(url);
  }

}
