import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.css']
})
export class HomeTextComponent implements OnInit {
  name: string = '';
  i = 0;

  constructor() { }

  nameArr = [
    '',
    'a Web Developer',
    'a Musician',
    'a Foodie',
    'a Not So Great Athlete',
    'an Anime Lover',
    'an ESTP',
    'a Cambodian Woman',
    'a Front End Fiend',
    'a Lover of Puns',
    'an Animal Lover',
    'a Nerd',
    'CodeStack Alumna',
    'Student Pilot'

  ];

  ngOnInit(): void {
    this.cycleText()
  }

  cycleText(){
    this.name = this.nameArr[this.i];
    this.i = ++this.i % this.nameArr.length;
    setTimeout(() =>this.cycleText(), 2000)
  }

}
