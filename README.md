# BreakTime - Café Website

Modern website for BreakTime café in Banská Bystrica. Built with Angular 18+.

## 📋 About

BreakTime is a café in the center of Banská Bystrica offering quality coffee, fresh food and a pleasant atmosphere. This website serves as an online business card with information about the menu, gallery and contact form.

## 🎨 Features

- **Home page** - hero section with background image, café story and values
- **Menu** - split into drinks and food menu (without prices)
- **Gallery** - 9 photo slots with elegant display
- **Catering** - catering services with gallery and contact
- **Contact form** - functional form connected to EmailJS
- **Responsive design** - optimized for mobile, tablet and desktop

## 🎨 Design

### Color Palette
- Primary colors: `#6B4423`, `#8B5A2B` (dark brown gradients)
- Background: `#fef9f3` (cream)
- Accents: `#d4a574`, `#e8c5a0`, `#f4e4d7`
- Text: `#5d4037`

### Style
- Casual Slovak language
- Warm brown-beige tones reminiscent of coffee and food
- Subtle shadows and hover effects
- Minimalist approach

## 🚀 Getting Started

### Prerequisites
- Node.js v25.2.1 or higher
- npm or yarn

### Installation

```bash
# Clone repository
git clone <repository-url>
cd break-time-web

# Install dependencies
npm install

# Start development server
npm start
```

Application will be available at `http://localhost:4200/`

## 📧 EmailJS Configuration

Contact form uses EmailJS. To make it functional:

1. Register at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. In `/src/app/pages/contact/contact.ts` add:
   - `serviceId` - your EmailJS service ID
   - `templateId` - your email template ID
   - `publicKey` - your EmailJS public key

## 📁 Structure

```
src/app/
├── pages/           # All pages (home, menu, gallery, catering, contact)
└── shared/          # Header and footer
public/assets/gallery/  # Photos
```

## 📸 Gallery

Photos are stored in `public/assets/gallery/` (1.jpg to 9.jpg, main.jpg)

## 🛠️ Technologies

- **Angular 18+** - standalone components, SSR
- **TypeScript** - strict mode
- **SCSS** - styling
- **EmailJS** - contact form
- **Angular Router** - navigation

## 📦 Build

```bash
# Production build
npm run build
```

Build artifacts will be in `dist/` folder

## 📝 Resources

- [Angular Documentation](https://angular.dev)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation/)

## 👨‍💻 Author

Adrian Vlčko

---

**Version:** 1.0.0  
**Angular CLI:** 21.0.2  
**Node.js:** 25.2.1
