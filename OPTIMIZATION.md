# ⚡ Optimalizácie výkonu - BreakTime Web

Tento dokument popisuje implementované optimalizácie a ďalšie odporúčania pre Angular aplikáciu.

## ✅ Implementované optimalizácie

### 1. **Lazy Loading obrázkov**
- ✅ Všetky obrázky v galérii používajú `loading="lazy"`
- ✅ Catering obrázky používajú lazy loading
- ✅ Team portréty s lazy loading
- ✅ Všetky obrázky používajú `decoding="async"`

### 2. **Angular Build optimalizácie**
- ✅ Script minifikácia
- ✅ CSS minifikácia s inline critical CSS
- ✅ Font optimalizácia
- ✅ Output hashing pre cache busting
- ✅ Source maps vypnuté v produkcii
- ✅ Named chunks vypnuté

### 3. **Network optimalizácie**
- ✅ Preconnect pre Google Fonts
- ✅ DNS prefetch pre kritické domény

### 4. **SSR (Server-Side Rendering)**
- ✅ Angular Universal pre rýchlejšie FCP (First Contentful Paint)
- ✅ Prerendering pre SEO

## 🚀 Ďalšie odporúčania

### 1. **Komprimujte obrázky (Najväčší impact!)**

Spustite priložený skript:

```bash
chmod +x optimize-images.sh
./optimize-images.sh
```

**Očakávané úspory:**
- Gallery: ~40-60% redukcia veľkosti
- Catering: ~40-60% redukcia veľkosti  
- Team photos: ~30-50% redukcia veľkosti

### 2. **Použite WebP s fallback na JPEG**

Po spustení optimize-images.sh máte WebP verzie. Aktualizujte komponenty:

**Gallery component (gallery.html):**
```html
<picture>
  <source [srcset]="image.src.replace('.jpg', '.webp')" type="image/webp">
  <img [src]="image.src" loading="lazy" decoding="async">
</picture>
```

**Catering component (catering.html):**
```html
<picture>
  <source [srcset]="image.src.replace('.jpg', '.webp')" type="image/webp">
  <img [src]="image.src" loading="lazy" decoding="async">
</picture>
```

### 3. **Responsive Images**

Pre rôzne veľkosti obrazoviek:

```typescript
// gallery.ts
galleryImages = [
  {
    src: '/assets/gallery/a.jpg',
    srcset: '/assets/gallery/a-small.jpg 640w, /assets/gallery/a-medium.jpg 1024w, /assets/gallery/a.jpg 1920w',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
    alt: 'Galéria BREAKTIME'
  }
];
```

### 4. **CDN Configuration**

Pre produkciu cez GitHub Pages alebo Netlify:

**angular.json - production config:**
```json
"deployUrl": "https://cdn.breaktime.sk/",
"baseHref": "/"
```

### 5. **Service Worker pre PWA**

Pridajte PWA funkcionalitu:

```bash
ng add @angular/pwa
```

**Výhody:**
- Offline support
- Rýchlejšie opakované načítanie
- App-like zážitok

### 6. **Preload kritických súborov**

V `index.html` pridajte:

```html
<link rel="preload" as="image" href="/assets/main.jpg">
<link rel="preload" as="font" href="/assets/fonts/main.woff2" type="font/woff2" crossorigin>
```

## 📊 Angular Specific Optimizations

### 1. **OnPush Change Detection**

Pre komponenty bez časté zmien:

```typescript
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

### 2. **TrackBy Functions**

Pre *ngFor loopty:

```typescript
// gallery.ts
trackByImage(index: number, image: any): number {
  return image.id || index;
}
```

```html
<!-- gallery.html -->
<div *ngFor="let image of galleryImages; trackBy: trackByImage">
```

### 3. **Lazy Load Routes**

```typescript
// app.routes.ts
const routes: Routes = [
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then(m => m.GalleryComponent)
  },
  {
    path: 'catering',
    loadComponent: () => import('./pages/catering/catering').then(m => m.CateringComponent)
  }
];
```

## 📈 Meranie výkonu

### Google Lighthouse

```bash
npm run build
npm run serve:ssr:break-time-web

# V Chrome DevTools:
# Lighthouse → Run Analysis
```

**Cieľové skóre:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Angular CLI Bundle Analyzer

```bash
npm install -g webpack-bundle-analyzer
ng build --stats-json
webpack-bundle-analyzer dist/break-time-web/stats.json
```

## 🎯 Prioritný action plan

1. **Komprimujte všetky obrázky** → Úspora ~500-800 KB ⭐⭐⭐
2. **Použite WebP formát** → Ďalšia úspora ~200-300 KB ⭐⭐
3. **Implementujte OnPush stratégiu** → Rýchlejší rendering ⭐⭐
4. **CDN pre assets** → Rýchlejšie načítanie globálne ⭐
5. **PWA Service Worker** → Offline support ⭐

## ⚡ Očakávané výsledky

**Pred optimalizáciou:**
- Bundle size: ~450 KB
- Images: ~1.5 MB
- **Total: ~2 MB**
- Load time (3G): ~12-15s
- Lighthouse Score: 70-75

**Po optimalizácii:**
- Bundle size: ~380 KB (minifikácia + tree shaking)
- Images: ~600 KB (kompresia + WebP)
- **Total: ~980 KB**
- Load time (3G): ~5-7s
- Lighthouse Score: 90+

**Zlepšenie: ~50% rýchlejšie načítanie! 🚀**

## 🔧 Build Commands

```bash
# Development
npm start

# Production build
npm run build

# Serve production with SSR
npm run serve:ssr:break-time-web

# Analyze bundle
npm run build -- --stats-json
```

## 📝 Checklist pred deploymentom

- [ ] Skomprimované obrázky
- [ ] WebP verzie vytvorené
- [ ] Lazy loading implementovaný
- [ ] OnPush change detection kde je možné
- [ ] TrackBy funkcie v *ngFor
- [ ] Lighthouse score 90+
- [ ] Bundle analyzer skontrolovaný
- [ ] SSR funguje správne
- [ ] Meta tagy pre SEO
- [ ] Open Graph obrázky optimalizované
