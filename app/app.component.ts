import { Component } from '@angular/core';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent]
})

@Routers([
  { path: '/', name: 'Home', component: SearchComponent },
  { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent {
  constructor(private _router: Router){

  }
 }
