import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuOpen = false;

  public scroll($element: HTMLElement): void {
    $element.scrollIntoView( {behavior: "smooth", block: "start", inline: "nearest"} );
  }
}
