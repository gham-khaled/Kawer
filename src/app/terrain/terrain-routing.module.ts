import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TerrainComponent} from './terrain.component';
import {TerrainListComponent} from './terrain-list/terrain-list.component';
import {TerrainDetailComponent} from './terrain-detail/terrain-detail.component';

const routes: Routes = [
  {
    path: 'terrains', component: TerrainComponent, children: [
      {path: ':id', component: TerrainDetailComponent},
      {path: '', component: TerrainListComponent}
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerrainRoutingModule {

}
