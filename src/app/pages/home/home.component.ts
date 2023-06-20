import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private api: ApiService, private router: Router) {
    this.getLandingPageTexts();
  }

  public scroll(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    } else {
      this.router.navigate([], { fragment: id });
    }
  }

  getLandingPageTexts() {
    this.landingPage = this.api.getLandingPage();
  }
}
