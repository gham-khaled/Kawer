import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {TerrainService} from './terrain/terrain.service';
import {AmplifyAngularModule, AmplifyService} from 'aws-amplify-angular';
import {AppRoutingModule} from './app-routing.module';
import {TerrainModule} from './terrain/terrain.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AmplifyAngularModule,
    AppRoutingModule,
    TerrainModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [TerrainService, AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
