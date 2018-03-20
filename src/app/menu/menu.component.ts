import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
// deleted when adding in @inject baseURL import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

    dishes: Dish[];
    errMess: string;
  //deleted  selectedDish: Dish;

  constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess); //then is promise call for
        // when promise resolves "then" *do this* (in this
        // case take what was received from getDishes and display the dish)
}
//deleted onSelectdish() method

  }
