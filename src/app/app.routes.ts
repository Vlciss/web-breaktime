import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
// import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Menu } from './pages/menu/menu';
import { Gallery } from './pages/gallery/gallery';
import { Catering } from './pages/catering/catering';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
//   { path: 'about', component: About },
  { path: 'menu', component: Menu },
  { path: 'gallery', component: Gallery },
  { path: 'catering', component: Catering },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
