import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Terrain} from '../terrain.model';
import {TerrainService} from '../terrain.service';

@Component({
  selector: 'app-terrain-list',
  templateUrl: './terrain-list.component.html',
  styleUrls: ['./terrain-list.component.css']
})
export class TerrainListComponent implements OnInit, OnDestroy {

  terrains: Terrain[];
  terrainSub: Subscription;

  constructor(private  terrainService: TerrainService) {
  }

  ngOnInit(): void {
    this.terrains = this.terrainService.getterrains();
    this.terrainSub = this.terrainService.terrainsChanged.subscribe((terrains) => {
      this.terrains = terrains;
    });
  }

  ngOnDestroy(): void {
    this.terrainSub.unsubscribe();
  }

}
