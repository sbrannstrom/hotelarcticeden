import { Injectable } from '@angular/core';
import { Directus } from '@directus/sdk';
import { MyCollections } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  directus = new Directus('/api');

  getLandingPage() {
    return this.directus.singleton('landing_page').read();
  }
}