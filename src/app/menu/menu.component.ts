import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

    dishes: Dish[];

    selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes); //then is promise call for
        // when promise resolves "then" *do this* (in this
        // case take what was received from getDishes and display the dish)
}
  onSelect(dish: Dish){
    this.selectedDish = dish;
  }


  }
