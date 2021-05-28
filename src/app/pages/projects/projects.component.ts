import { Component, OnInit } from '@angular/core';
// import { url } from 'node:inspector';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   projects = [
     {
       name:'Mayor Of Stockton', 
       picture: '../../../assets/images/proj/mayorStockton.png', 
       description: 'Built and launched the official site of the mayor of Stockton.', 
       src: 'https://www.stocktonmayor.org', 
       keywords: "design, build, html, css, bootstrap"
      },

     {
       name:'Triton', 
       picture: '', 
       description: 'In Progress: Full stack mobile app to keep track of your pets!', 
       src: '', 
       keywords: " build, teamwork, ionic, angular, scss, bootstrap"
      },
     {
       name:'Amor Kombucha', 
       picture: '', 
       description: 'Local Business Design of Amor Kombuchas Website.', 
       src: 'https://www.eang.dev/amor', 
       keywords: "design, build, html, css, javascript, bootstrap"
      },
     {
       name:'', picture: '', description: '', src: '', keywords: ""
      },

   ];
  constructor() { }

  ngOnInit(): void {
  }

  
}
