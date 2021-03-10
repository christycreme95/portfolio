import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {NgbdDropdownBasicModule} from './app/dropdown-basic.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

  
})
export class NavComponent implements OnInit {
  isNavCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

  collapse():void{
    this.isNavCollapsed = !this.isNavCollapsed;
  }
}
