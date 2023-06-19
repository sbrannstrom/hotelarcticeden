import { Component } from '@angular/core';
import { IEdenInfo, LandingPage } from 'src/app/common/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  landingPage!: Promise<Partial<LandingPage>>;
  menuOpen = false;
  edenArray: IEdenInfo[] = [
    {
      src: '/assets/eden0.png',
      text: '',
      link: '#'
    },
    {
      src: '/assets/eden1.png',
      text: '',
      link: '#'
    },
    {
      src: '/assets/eden2.png',
      text: '',
      link: '#'
    },
    {
      src: '/assets/eden3.png',
      text: '',
      link: '#'
    },
  ];

  constructor(private api: ApiService) {
    this.getLandingPageTexts();
  }

  public scroll($element: HTMLElement): void {
    $element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"} );
  }

  getLandingPageTexts() {
    this.landingPage = this.api.getLandingPage();
  }
}
