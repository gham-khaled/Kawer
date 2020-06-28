import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {SchedulerModule} from 'angular-calendar-scheduler';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ListFieldsComponent} from './list-fields/list-fields.component';
import {FieldDetailComponent} from './field-detail/field-detail.component';
import {CarouselComponent} from './carousel/carousel.component';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {SchedulerComponent} from './scheduler/scheduler.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from "@angular/material/dialog";
import { ConfirmDialogComponent } from './scheduler/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListFieldsComponent,
    FieldDetailComponent,
    CarouselComponent,
    SchedulerComponent,
    ConfirmDialogComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    SchedulerModule.forRoot({locale: 'en', headerDateFormat: 'daysRange'}),
    MatProgressSpinnerModule,
    MatDialogModule
  ],

  entryComponents: [
    ConfirmDialogComponent
  ],

  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
