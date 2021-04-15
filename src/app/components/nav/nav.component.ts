import { Component, OnInit } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
// import {NgbdDropdownBasicModule} from './app/dropdown-basic.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']

  
})
export class NavComponent implements OnInit {
  isNavCollapsed = true;
  home: boolean = false;
  about: boolean = false;
  project: boolean = false;
  contact: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  collapse():void{
    this.isNavCollapsed = !this.isNavCollapsed;
  }
}
