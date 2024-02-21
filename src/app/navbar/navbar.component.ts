import { Component, OnInit } from '@angular/core';
import { navBarValues } from './navBarInfo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navBarValues = navBarValues;

  constructor() { }

  ngOnInit(): void {
  }

}
