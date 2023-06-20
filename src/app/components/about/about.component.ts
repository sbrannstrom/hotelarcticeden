import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  sliderContent: string[] = ['https://placehold.co/600x1000', 'https://placehold.co/600x1000', 'https://placehold.co/600x1000'];
}
