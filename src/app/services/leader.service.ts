import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import server url and HTTP MSG service
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';


import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
//for error with Http Module
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LeaderService {

  constructor( private restangular: Restangular) { }

  leaders: Leader[];
  leaderErrMess: string;

    getLeaders(): Observable<Leader[]> {
      return this.restangular.all('leaders').getList();
    }

    getLeader(id: number): Observable<Leader> {
      return this.restangular.one('leaders',id).get();
    }

    getFeaturedLeader(): Observable<Leader> {
      return this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);
      }
}
