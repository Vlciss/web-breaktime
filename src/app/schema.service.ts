import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  constructor(
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  addLocalBusinessSchema() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "name": "BreakTime",
      "image": "https://vlciss.github.io/breaktime-web/assets/gallery/main.jpg",
      "description": "Raňajkáreň v Banskej Bystrici. Ponúkame kvalitnú kávu, čerstvé jedlá a príjemnú atmosféru.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Trieda SNP 75",
        "addressLocality": "Banská Bystrica",
        "postalCode": "974 01",
        "addressCountry": "SK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "48.7366",
        "longitude": "19.1528"
      },
      "url": "https://vlciss.github.io/breaktime-web",
      "telephone": "+421907602172",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "servesCuisine": "Káva, Raňajky, Lunch, Dezerty",
      "menu": "https://vlciss.github.io/breaktime-web/menu",
      "sameAs": [
        "https://www.instagram.com/breaktimebb/"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  addRestaurantSchema() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "BreakTime Catering",
      "description": "Cateringové služby v Banskej Bystrici. Firemné akcie, oslavy, lunch boxy, raňajky na mieru.",
      "image": "https://vlciss.github.io/breaktime-web/assets/gallery/main.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Trieda SNP 75",
        "addressLocality": "Banská Bystrica",
        "postalCode": "974 01",
        "addressCountry": "SK"
      },
      "telephone": "+421907602172",
      "url": "https://vlciss.github.io/breaktime-web/catering",
      "servesCuisine": "Catering, Firemné akcie, Oslavy"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
