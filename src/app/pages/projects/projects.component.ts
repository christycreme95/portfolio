import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

// import { url } from 'node:inspector';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  closeResult = '';
   projects = [
     {
       name:'Mayor Of Stockton',
       picture: '../../../assets/images/proj/mayorStockton.png', 
       description: 'Built and launched the official site of the mayor of Stockton from start to finish.', 
       src: 'https://www.stocktonmayor.org',
       keywords: "internship, design, build, html, css, bootstrap"
      },
      {
        name:'Teachers College Of Education', picture: '../../../assets/images/proj/tcsj.jpg', description: 'Updating the homepage, programs, and masters pages of TCSJ', src: '', keywords: 'internship, design, adobe XD, html, css, bootstrap'
       },
     {
       name:'Triton', 
       picture: '../../../assets/images/proj/tritonsample.jpg', 
       description: 'In Progress: Full stack mobile app to keep track of your pets! Has not been launched yet, click for prototype!', 
       src: 'https://xd.adobe.com/view/b948009e-11bb-40db-8702-8787478f8eef-ec1b/', 
       keywords: " build, design, ionic, angular, scss, teamwork"
      },
     {
       name:'Amor Kombucha', 
       picture: '../../../assets/images/proj/amorKombucha.jpg', 
       description: 'Local Business Design and Build of Amor Kombuchas Website.', 
       src: 'https://www.eang.dev/amor', 
       keywords: "design, build, html, css, bootstrap, teamwork"
      },
      {
        name:'Weather App', picture: '../../../assets/images/proj/weather.jpg', description: 'Learning how to pull from an api using another persons design', src: 'http://christystesterthing.azurewebsites.net/weatherAPI/', keywords: 'api, javascript, local storage'
       },
       {
        name:'Hamster Hotel', picture: '../../../assets/images/proj/hamsterHotel.jpg', description: 'Complete recreation of a beautiful site to show my talent in responsive design.', src: '', keywords: 'html, css, bootstrap, my first project'
       },

   ];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

