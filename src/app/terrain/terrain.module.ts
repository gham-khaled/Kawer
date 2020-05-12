import {NgModule} from '@angular/core';
import {TerrainComponent} from './terrain.component';
import {TerrainDetailComponent} from './terrain-detail/terrain-detail.component';
import {TerrainItemComponent} from './terrain-list/terrain-item/terrain-item.component';
import {TerrainListComponent} from './terrain-list/terrain-list.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    TerrainComponent,
    TerrainDetailComponent,
    TerrainItemComponent,
    TerrainListComponent
  ],
  exports: [
    TerrainComponent,
    TerrainListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class TerrainModule {

}
