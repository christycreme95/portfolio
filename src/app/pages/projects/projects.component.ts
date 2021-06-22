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
       pic2: '../../../assets/images/proj/mayor2.jpg',

       picture: '../../../assets/images/proj/mayorStockton.png', 
       description: 'Built and launched the official site of the mayor of Stockton from start to finish.', 
       src: 'https://www.stocktonmayor.org',
       long: 'During my Internship with CodeStack - San Joaquin County Of Education, I used Adobe XD to design the majority of the page into a fully functioning prototype. After approval, I started working on building the site in HTML, CSS and the CSS framework, Bootstrap. During the process, I was able to pull information from the Mayor\'s Facebook account and implement outside news sources and external resources. During the build I was able to use Bootstrap components, and source control. Accessibility is extremely important to me so I made sure everything was up to par. Once the website was finished, I was given the opportunity to present this website to the mayor\'s office, and launched the site using FileZilla.',
       btn:'Mayor\'s Site',
      },
      {
        name:'Teachers College Of Education', 
        pic2: '../../../assets/images/proj/mastersAdvisors.jpg',
        picture: '../../../assets/images/proj/tcsj.jpg', 
        description: 'Updating the homepage, programs, and masters pages of TCSJ', 
        src: 'https://teacherscollegesj.edu/', 
        keywords: 'internship, design, adobe XD, html, css, bootstrap'
        ,btn:'TCSJ',
        long: 'During my Internship with CodeStack - San Joaquin County Of Education, under the instruction of a UI/UX Specialist, I designed and built portions of the site such as the main home page\'s About Us, Programs, Events, and Contact Us. I used Bootstrap built in grid system to manipulate the page. I was also able to design and implement a whole new section in the Programs Section called Masters Advisors.  I used Adobe XD to prototype, received approval from the client, and started building. I used Bootstrap cards and modals to highlight each advisor\'s biography.'
       
      },
     {
       name:'Triton', 
       pic2: '../../../assets/images/proj/trit2.jpg',
       picture: '../../../assets/images/proj/tritonsample.jpg', 
       description: 'In Progress: Full stack mobile app to keep track of your pets! Has not been launched yet.', 
       src: 'https://xd.adobe.com/view/b948009e-11bb-40db-8702-8787478f8eef-ec1b/', 
       keywords: "build, design, ionic, angular, scss, teamwork"
       ,btn:'Triton Prototype',
       long:'Triton is a full stack mobile application built in Ionic, Angular, and SCSS. This app is being built by three developers, two of my colleagues from CodeStack Academy and myself. We used a mix of Bootstrap and Angular Material for the components design. We spent a couple of months building out a fully functioning prototype of the app and started the developing process in March of 2021. We took the initiative to learn Ionic from scratch and build the backend from what we already knew. I predominantly built the front end components and set up most of the routing in the app. I was able to use http get and http post from the database my colleagues built. We are still developing this app and it will be released to the Play Store by July 2021.',
      },
     {
       name:'Amor Kombucha', 
       pic2: '../../../assets/images/proj/amorKom2.jpg',
       picture: '../../../assets/images/proj/amorKombucha.jpg', 
       description: 'Local Business Design and Build of Amor Kombuchas Website.', 
       src: 'https://www.eang.dev/amor', 
       keywords: "design, build, html, css, bootstrap, teamwork",
       long: 'A fellow classmate and I found a business that did not have a site previously and designed something for this business. We used HTML CSS and Bootstrap with some JavaScript. I was able to implement a hover effect that would make it look like the bottles was being pushed like it was sliding on a bar. This application definitely showed me how to work with a teammate and the usage of media queries in CSS.', btn:'Amor Kombucha',

      },
      {
        name:'Weather App', 
       pic2: '../../../assets/images/proj/weather2.jpg',
        picture: '../../../assets/images/proj/weather.jpg', 
        description: 'Learning how to pull from an api using another persons design', 
        src: 'https://christystesterthing.azurewebsites.net/weatherAPI/', 
        keywords: 'api, javascript, local storage',
        long: 'This app was created to learn how to pull from a weather api. In a 3 day sprint, we created an HTML, CSS, JavaScript application that pulled from an api, used local storage, and a search function. I was tasked to use someone else\'s prototype to create this functioning app. If I were to change anything, I\'d have to go to the person who designed it for approval. With this, it had me experience having to deal with a client.'
       ,btn:'Weather App',

       },
       {
        name:'Hamster Hotel', 
       pic2: '../../../assets/images/proj/hams2.jpg',
        picture: '../../../assets/images/proj/hamsterHotel.jpg', 
        description: 'Complete recreation of a beautiful site to show my ability to use Bootstrap\'s Grid System and components.', 
        src: 'https://www.eang.dev/hamster', 
        long: 'This was my first ever project in HTML, CSS, Bootstrap. I recreated a prototype to the pixel. This was predominantly to learn how to use Bootstrap\'s grid system, components, and responsiveness. I put this in my portfolio because it reminds me where I started. I have more to learn but I\'ve done so much after this to become a much better developer.',
        keywords: 'html, css, bootstrap, my first project',
        btn: 'Hamster Time!'
       },

   ];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
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

