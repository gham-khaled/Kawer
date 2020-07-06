import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {SchedulerModule} from 'angular-calendar-scheduler';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ListFieldsComponent} from './fields/list-fields/list-fields.component';
import {FieldDetailComponent} from './fields/field-detail/field-detail.component';
import {CarouselComponent} from './fields/field-detail/carousel/carousel.component';
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {SchedulerComponent} from './fields/field-detail/scheduler/scheduler.component';
import { ConfirmDialogComponent } from './fields/field-detail/scheduler/confirm-dialog/confirm-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ProfileComponent } from './profile/profile.component';
import { SignInDialogComponent } from './sign-in-dialog/sign-in-dialog.component';
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { FieldsComponent } from './fields/fields.component';

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
    ConfirmDialogComponent,
    ProfileComponent,
    SignInDialogComponent,
    LoginDialogComponent,
    FieldsComponent
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
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
        MatNativeDateModule,
        MatSelectModule,
        MatIconModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ],

  entryComponents: [
    ConfirmDialogComponent,
    SignInDialogComponent,
    LoginDialogComponent
  ],

  providers: [
    {provide: LOCALE_ID, useValue: 'en-US'}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
