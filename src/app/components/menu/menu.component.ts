import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  
  mobileMenuOpen = false;
  headerClass = 'bg-opacity-0';
  showTopButton = false;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 64 || document.documentElement.scrollTop > 64) {
        this.showTopButton = true;
        this.headerClass = 'sticky-header';
      } else {
        this.showTopButton = false;
        this.headerClass = 'transition-colors duration-300 bg-opacity-0';
      }
    })
  }
  
  
  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => {
      //
    });
  }
  public scroll(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    } else {
      this.router.navigate([], { fragment: id });
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
