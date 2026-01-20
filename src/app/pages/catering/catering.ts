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
      src: '/assets/catering/1.jpg'
    },
    {
      src: '/assets/catering/2.jpg'
    },
    {
      src: '/assets/catering/3.jpg'
    },
    {
      src: '/assets/catering/4.jpg'
    },
    {
      src: '/assets/catering/5.jpg'
    },
    {
      src: '/assets/catering/6.jpg'
    }
  ];
}
