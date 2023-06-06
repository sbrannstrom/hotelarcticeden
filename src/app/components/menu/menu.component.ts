import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  mobileMenuOpen = false;

  public scroll(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"} );
    }
  }
}
