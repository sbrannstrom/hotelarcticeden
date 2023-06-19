import { Injectable } from '@angular/core';
import { Directus } from '@directus/sdk';
import { LandingPage, MyCollections } from '../common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  directus = new Directus<MyCollections>('/api');

  async getLandingPage(): Promise<Partial<LandingPage>> {
    return await this.directus.singleton('landing_page').read();
  }

  async getLandingImage() {
    return await this.directus.files.readOne('4da3ad53-0b96-41ae-831a-7aa2811585fa');
  }
}