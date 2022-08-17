import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult = '';

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  about: any = {
      name:'My Experience In Code.',
      long: `
      <p><b>CodeStack Junior Web Developer Internship</b></p>
      <p>
          I've been fortunate enough to work on projects in different languages, libraries and frameworks with
          time in an
          Agile Environment,
          participating in sprints and being able to learn senior level deveopers and testers. I was given the
          opportunity to create the
          <a href="https://stocktonmayor.org/" target="_blank" class="csa">Mayor Of Stockton's official
              website</a> during the first half of my internship in HTML, CSS. I was given the opportunity to
          continue my internship and once I accepted,
          I was placed
          into the group that manages <a href="https://www.seis.org/" target="_blank" class="csa">SEIS</a>. SEIS
          is a website that serves special education all over California. This is a huge code base and taught me
          so much about coding, and teamwork.
          In SEIS I was able to further my full stack experience using AngularJS, C#, and SQL.
      </p>
      <br>
      <p class="mb-1"><b>Mike's Mobile Services</b></p>
      <p>Web Developer</p>
      <p>
          I was hired on to be the Web Developer at Mike's Mobile. I was able to participate in the redesign and
          management of the Mike's Mobile website, made in Angular and management of the company's usage of the
          CRM, Service Titan. I was also tasked with the management of all hardware used in the company. This was
          definitely not what I was expecting! A couple of months in, I was able to learn the ropes of Mike's
          Mobile's proprietary software, Bear Hands Pro, created in React, using MongoDB and NodeJS. I learned so
          much from my senior developers and had lots of fun getting to know all the technicians and people, but
          it was time to move on!
      </p>
      <br>
      <p class="mb-1"><b>CodeStack - SJCOE</b></p>
      <p>Associate Web Developer</p>
      <p>
          I am currently an Associate Web Developer at CodeStack, developing fullstack applications and assisting
          in training interns and junior web developers. I am currently working on rebuilding a site called DRDP
          in Angular, TailwindCss, and .Net6. My team was working on Captain's internal application, but was moved
          over to DRDP full time! Working together with this team has been such an amazing experience. I've
          learned so much in the past couple of months to build each other into fullstack developers!
      </p>`,
      btn:'Close',
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
