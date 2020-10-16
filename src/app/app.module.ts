import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {SchedulerModule} from 'angular-calendar-scheduler';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {ConfirmDialogComponent} from './fields/field-detail/scheduler/confirm-dialog/confirm-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ProfileComponent} from './profile/profile.component';
import {SignUpDialogComponent} from './user/sign-in-dialog/sign-up-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LoginDialogComponent} from './user/login-dialog/login-dialog.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {AgmCoreModule} from '@agm/core';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,

    ProfileComponent,
    SignUpDialogComponent,
    LoginDialogComponent,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    SchedulerModule.forRoot({locale: 'en', headerDateFormat: 'daysRange'}),
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    AmplifyUIAngularModule
  ],

  entryComponents: [
    ConfirmDialogComponent,
    SignUpDialogComponent,
    LoginDialogComponent
  ],

  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'},
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
