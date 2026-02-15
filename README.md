# BreakTime - Breakfast Place in Banská Bystrica

Modern website for BreakTime breakfast place in Banská Bystrica. Built with Angular 18+.

🌐 **Live Website:** [https://breaktime.sk/](https://breaktime.sk/)

## 📋 About

BreakTime is a breakfast place in Banská Bystrica offering quality coffee, fresh food and a pleasant atmosphere. This website serves as an online business card with information about menu, gallery, catering and contact form.

**Address:** Trieda SNP 75, Banská Bystrica (Statistical Office building)  
**Opening Hours:** MON-FRI 8:00-18:00  
**Contact:** +421 907 602 172  
**Instagram:** [@breaktimebb](https://www.instagram.com/breaktimebb/)

## ✨ Features

- **Home page** - hero section with background, café story, our approach, mini gallery preview
- **Menu** - split into drinks and food sections (without prices)
- **Gallery** - 9 photos with elegant display and modal preview
- **Catering** - catering services, venue rental
- **Contact form** - functional form connected to EmailJS
- **Responsive design** - fully optimized for mobile, tablet and desktop
- **SEO optimization** - meta tags, Schema.org, sitemap.xml, robots.txt
- **⚡ Performance optimizations** - lazy loading, WebP support, optimized builds

## ⚡ Performance Optimizations

This project includes several performance enhancements:

- ✅ **Lazy loading** for all gallery and catering images
- ✅ **Async image decoding** for smoother rendering
- ✅ **Optimized Angular builds** with minification and tree-shaking
- ✅ **DNS prefetch** for faster external resource loading
- ✅ **SSR (Server-Side Rendering)** for faster initial page load

For detailed optimization guide, see [OPTIMIZATION.md](OPTIMIZATION.md).

### Image Optimization

To compress images and create WebP versions:

```bash
chmod +x optimize-images.sh
./optimize-images.sh
```

This will reduce image sizes by ~50-70% without visible quality loss.

## 🎨 Design

### Color Palette
- Primary colors: `#6B4423`, `#8B5A2B` (dark brown gradients)
- Background: `#fef9f3` (cream) with subtle texture
- Accents: `#d4a574`, `#e8c5a0`, `#f4e4d7`
- Text: `#5d4037`

### Style
- Casual Slovak language content
- Warm brown-beige tones reminiscent of coffee and food
- Subtle background texture (opacity 0.12, blur 1px)
- Underlined menu links in header
- 3-column footer (opening hours | address | contact)
- Minimalist approach focused on content

## 🚀 Installation and Setup

### Prerequisites
- Node.js v25.2.1 or higher
- npm or yarn

### Local Development

```bash
# Clone repository
git clone https://github.com/Vlciss/breaktime-web.git
cd breaktime-web

# Install dependencies
npm install

# Start dev server
npm start
```

Application will be available at `http://localhost:4200/`

## 🌐 GitHub Pages Deployment

Project is automatically published to GitHub Pages on every push to `main` branch.

### Automatic Deployment
1. Push to `main` branch triggers GitHub Actions workflow
2. Project is built using `npm run build`
3. Build is automatically deployed to GitHub Pages
4. Website is available at: [https://breaktime.sk/](https://breaktime.sk/)

### Manual Deployment
```bash
# Production build
npm run build

# Deploy to GitHub Pages (automatically via GitHub Actions)
git push origin main
```

## 📧 EmailJS Configuration

Contact form uses EmailJS. To make it functional:

1. Register at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. In `/src/app/pages/contact/contact.ts` add:
   - `serviceId` - your EmailJS service ID
   - `templateId` - your email template ID
   - `publicKey` - your EmailJS public key

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/              # All pages
│   │   ├── home/           # Home page
│   │   ├── menu/           # Menu page
│   │   ├── gallery/        # Gallery
│   │   ├── catering/       # Catering
│   │   └── contact/        # Contact
│   ├── shared/             # Shared components
│   │   ├── header/         # Header
│   │   └── footer/         # Footer
│   ├── app.scss            # Global styles (background texture)
│   └── schema.service.ts   # Schema.org SEO
├── styles.scss             # Global CSS
└── index.html              # HTML + SEO meta tags

public/
└── assets/
    └── gallery/            # Photos (1.jpg - 9.jpg, main.jpg, textura.png)
```

## 📸 Gallery

Photos are stored in `public/assets/gallery/`:
- `1.jpg` to `9.jpg` - gallery photos
- `main.jpg` - hero background on home page
- `textura.png` - background texture for pages

## 🛠️ Technologies

- **Angular 18+** - standalone components, routing
- **TypeScript** - strict mode
- **SCSS** - styling with texture
- **EmailJS** - contact form
- **Schema.org** - SEO structured data (LocalBusiness, CafeOrCoffeeShop)
- **GitHub Pages** - automatic deployment
- **GitHub Actions** - CI/CD pipeline

## 🎯 SEO Optimization

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Schema.org structured data (LocalBusiness)
- ✅ `sitemap.xml` - sitemap
- ✅ `robots.txt` - crawler directives
- ✅ Canonical URLs
- ✅ Slovak language (`lang="sk"`)

## 📱 Mobile Optimization

- ✅ Responsive design for all devices
- ✅ Touch-friendly elements (min-height 44px)
- ✅ Optimized fonts and spacing
- ✅ Viewport meta tag properly configured
- ✅ Flexible navigation menu (flex-wrap)

## 🎨 Recent Changes (December 2025)

- Added subtle background texture (opacity 0.12, blur 1px)
- Texture only in main content area (not header/footer)
- Changed menu links to underline style (instead of box)
- 3-column footer layout (opening hours | address | contact)
- Added Google Maps link to footer
- Mini gallery preview on home page (sidebar)
- Gallery with links to 9 photos
- Contact cards with photos (prepared structure)
- Complete mobile optimization for all pages

## 📦 Build Commands

```bash
# Development server
npm start

# Production build
npm run build

# Run tests
npm test

# Lint check
npm run lint
```

## 📝 Resources

- [Angular Documentation](https://angular.dev)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Schema.org](https://schema.org/)
- [GitHub Pages](https://pages.github.com/)

---

**Author:** Adrian Vlčko  
**License:** Private project for BreakTime Banská Bystrica

---

**Version:** 1.0.0  
**Angular CLI:** 21.0.2  
**Node.js:** 25.2.1
