//routes accesses HTML5 History API for non-refresh page changes
import { Routes } from '@angular/router';

//import components that will be accessed by Routes (which uses the app-routing Module)
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  //defined paths for different "pages" in SPA
  { path: 'home',    component: HomeComponent },
  { path: 'menu',    component: MenuComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'contact', component: ContactComponent },
 //default route provided for incorrect path entry
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
