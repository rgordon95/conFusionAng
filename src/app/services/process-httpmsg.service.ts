import { Injectable } from '@angular/core';
//import obervable and http modules
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
//error handling
import 'rxjs/add/observable/throw';


@Injectable()
export class ProcessHTTPMsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  public handlerror(error: Response | any) {
    //in real world you might use a remote logging infrastructure
    let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}