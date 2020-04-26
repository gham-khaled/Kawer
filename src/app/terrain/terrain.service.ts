import {Terrain} from './terrain.model';
import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';

@Injectable()

export class TerrainService {
  terrainsChanged = new Subject<Terrain[]>();

  private terrains: Terrain [] = [
    new Terrain('San ciro',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/San_Siro_2011.jpg/1000px-San_Siro_2011.jpg',
      'Terrain a milan pour 11 jouers'),
    new Terrain('etihad stadium',
      'https://www.mercatofootanglais.com/wp-content/uploads/2019/09/cropped-etihad-stadium-manchester-city.jpg',
      'Terrain a Manchester pour 11 joueurs')
  ];

  constructor() {
  }

  getterrains() {
    return this.terrains.slice();
  }

  getterrain(id: number) {
    return this.terrains[id];
  }

  addterrain(terrain: Terrain) {
    this.terrains.push(terrain);
    this.terrainsChanged.next(this.terrains);
  }

  updateterrain(id: number, newterrain: Terrain) {
    this.terrains[id] = newterrain;
    this.terrainsChanged.next(this.terrains);

  }

  deleteterrain(id: number) {
    this.terrains.splice(id, 1);
    this.terrainsChanged.next(this.terrains);
  }

  setterrains(terrains: Terrain[]) {
    this.terrains = terrains;
    this.terrainsChanged.next(this.terrains.slice());
  }

}
