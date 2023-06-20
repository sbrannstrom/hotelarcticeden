import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  
  mobileMenuOpen = false;
  headerClass = 'bg-opacity-0';
  showTopButton = false;
  
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        this.showTopButton = true;
        this.headerClass = 'sticky-header';
      } else {
        this.showTopButton = false;
        this.headerClass = 'bg-opacity-0';
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
      element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"} );
    }
  }
}
