import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  // Fotky z BREAKTIME Banská Bystrica
  galleryImages = [
    {
      src: 'assets/gallery/1.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 1',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/2.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 2',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/3.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 3',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/4.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 4',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/5.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 5',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/6.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 6',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/7.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 7',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/8.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 8',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: 'assets/gallery/9.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 9',
      caption: 'BREAKTIME Banská Bystrica'
    }
  ];

  selectedImage: any = null;

  openModal(image: any) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

  nextImage() {
    const currentIndex = this.galleryImages.findIndex(img => img === this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.galleryImages.length;
    this.selectedImage = this.galleryImages[nextIndex];
  }

  prevImage() {
    const currentIndex = this.galleryImages.findIndex(img => img === this.selectedImage);
    const prevIndex = currentIndex === 0 ? this.galleryImages.length - 1 : currentIndex - 1;
    this.selectedImage = this.galleryImages[prevIndex];
  }
}
