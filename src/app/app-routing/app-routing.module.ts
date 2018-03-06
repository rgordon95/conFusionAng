//app-routing will only appear in app.component.html if you include <router-outlet></router-outlet>
//to add nav links that access routing module include router-link='/path/to/component.html' within button/link attributes
//import base angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import routes module
import { RouterModule, Routes } from '@angular/router';
 //import the routes for the routerModule from routes.ts file
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
