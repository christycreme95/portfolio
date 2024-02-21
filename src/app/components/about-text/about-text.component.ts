import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ABOUT_ME, URL_SEGMENTS } from 'src/app/core/data/constants';
import { Url } from 'src/app/core/enums/url';
import { IAboutMe } from 'src/app/core/interfaces/about';

@Component({
  selector: 'app-about-text',
  templateUrl: './about-text.component.html',
  styleUrls: ['./about-text.component.css']
})
export class AboutTextComponent implements OnInit {
  closeResult = '';
  UrlSegments = URL_SEGMENTS;
  url = Url;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  about: IAboutMe = ABOUT_ME;

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
