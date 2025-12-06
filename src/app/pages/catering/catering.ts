import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catering',
  imports: [CommonModule],
  templateUrl: './catering.html',
  styleUrl: './catering.scss'
})
export class Catering {
  cateringImages = [
    {
      src: 'assets/gallery/1200x900.jpg'
    },
    {
      src: 'assets/gallery/1200x900.jpg'
    },
    {
      src: 'assets/gallery/1200x900.jpg'
    },
    {
      src: 'assets/gallery/1200x900.jpg'
    },
    {
      src: 'assets/gallery/1200x900.jpg'
    },
    {
      src: 'assets/gallery/1200x900.jpg'
    }
  ];
}
