import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TerrainRoutingModule} from './terrain/terrain-routing.module';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: ''}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), TerrainRoutingModule],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {

}
