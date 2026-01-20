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
      src: '/assets/gallery/a.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 1',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/b.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 2',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/c.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 3',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/d.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 4',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/e.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 5',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/f.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 6',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/g.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 7',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/h.jpg',
      alt: 'BREAKTIME Banská Bystrica - fotka 8',
      caption: 'BREAKTIME Banská Bystrica'
    },
    {
      src: '/assets/gallery/i.jpg',
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
