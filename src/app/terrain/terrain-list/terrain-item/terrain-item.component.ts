import {Component, Input, OnInit} from '@angular/core';
import {Terrain} from '../../terrain.model';

@Component({
  selector: 'app-terrain-item',
  templateUrl: './terrain-item.component.html',
  styleUrls: ['./terrain-item.component.css']
})
export class TerrainItemComponent implements OnInit {
  @Input() terrain: Terrain;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
