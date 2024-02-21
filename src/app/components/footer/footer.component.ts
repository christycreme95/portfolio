import { Component, OnInit } from '@angular/core';
import { URL_SEGMENTS } from 'src/app/core/data/constants';
import { Url } from 'src/app/core/enums/url';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  UrlSegments = URL_SEGMENTS;
  url = Url;
  constructor() { }

  ngOnInit(): void {
  }

}
