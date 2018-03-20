import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
//import server url and HTTP MSG service
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
//simulates delay
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
//for error with Http Module
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import restangular modules for rest api use
import { RestangularModule, Restangular } from 'ngx-restangular';


@Injectable()
export class DishService {

  constructor(private restangular: Restangular,
              private processHTTPMsg: ProcessHTTPMsgService) { }


              getDishes(): Observable<Dish[]> {
  return this.restangular.all('dishes').getList();
}

getDish(id: number): Observable<Dish> {
  return  this.restangular.one('dishes',id).get();
}

getFeaturedDish(): Observable<Dish> {
  return this.restangular.all('dishes').getList({featured: true})
    .map(dishes => dishes[0]);
}

getDishIds(): Observable<number[]> {
  return this.getDishes()
    .map(dishes => { return dishes.map(dish => dish.id)})
    .catch(error => { return Observable.of(error); });
}
} // end export class
