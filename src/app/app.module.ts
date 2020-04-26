import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { TerrainComponent } from './terrain/terrain.component';
import { TerrainListComponent } from './terrain/terrain-list/terrain-list.component';
import { TerrainItemComponent } from './terrain/terrain-list/terrain-item/terrain-item.component';
import {TerrainService} from './terrain/terrain.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TerrainComponent,
    TerrainListComponent,
    TerrainItemComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [TerrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
