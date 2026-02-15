import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

/**
 * Direktíva pre automatický WebP fallback
 * Použitie: <img [src]="imagePath" appWebpFallback>
 * 
 * Automaticky vytvorí <picture> element s WebP a JPEG fallback
 */
@Directive({
  selector: 'img[appWebpFallback]',
  standalone: true
})
export class WebpFallbackDirective implements OnInit {
  @Input() src!: string;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (!this.src) return;

    const img = this.el.nativeElement as HTMLImageElement;
    const parent = img.parentElement;

    if (!parent) return;

    // Vytvor picture element
    const picture = this.renderer.createElement('picture');

    // Vytvor WebP source
    const webpSource = this.renderer.createElement('source');
    const webpSrc = this.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    this.renderer.setAttribute(webpSource, 'srcset', webpSrc);
    this.renderer.setAttribute(webpSource, 'type', 'image/webp');

    // Vlož source do picture
    this.renderer.appendChild(picture, webpSource);

    // Vlož pôvodný img do picture
    this.renderer.insertBefore(parent, picture, img);
    this.renderer.appendChild(picture, img);

    // Zachovaj pôvodný src ako fallback
    this.renderer.setAttribute(img, 'src', this.src);
  }
}
