import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostServiceProvider {

  constructor(public http: Http) {
      console.log('Hello PostServiceProvider Provider');
  }


  private PostMyChat(data) {
    var url = "http://localhost:8000/tors/";
    return this.http
    .post(url, data);
  }


}
