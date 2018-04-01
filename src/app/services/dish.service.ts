import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
//import server url and HTTP MSG service
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

//simulates delay
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
//for error with Http Module
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class DishService {

  constructor(private http: Http,
              private processHTTPMsgService: ProcessHTTPMsgService, private restangular: Restangular) { }


                getDishes(): Observable<Dish[]> {
                  return this.http.get(baseURL + 'dishes')
                                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                                  .catch(error => { return this.processHTTPMsgService.handlerror(error); });
                }

                getDish(id: number): Observable<Dish> {
                  return  this.http.get(baseURL + 'dishes/'+ id)
                                  .map(res => { return this.processHTTPMsgService.extractData(res); })
                                  .catch(error => { return this.processHTTPMsgService.handlerror(error); });
                }

                getFeaturedDish(): Observable<Dish> {
                  return this.http.get(baseURL + 'dishes?featured=true')
                                  .map(res => { return this.processHTTPMsgService.extractData(res)[0]; })
                                  .catch(error => { return this.processHTTPMsgService.handlerror(error); });
                }

                getDishIds(): Observable<number[]> {
                  return this.getDishes()
                    .map(dishes => { return dishes.map(dish => dish.id) })
                    .catch(error => { return Observable.of(error); });
                }

} // end export class
