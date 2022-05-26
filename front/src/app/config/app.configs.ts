import { Router, NavigationEnd } from '@angular/router';

export function getRoutes(router: Router) {
  let route: String = '';
  switch (router.url) {
    case '/clients':
      route = 'client';
      return route;
    case '/categories':
      route = 'category';
      return route;
    case '/loans':
      route = 'loans';
      return route;
  }
}
