import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ConfirmDialogComponent} from './fields/field-detail/scheduler/confirm-dialog/confirm-dialog.component';
import {SignUpDialogComponent} from './user/sign-in-dialog/sign-up-dialog.component';
import {LoginDialogComponent} from './user/login-dialog/login-dialog.component';
import {AppRoutingModule} from "./app-routing.module";
import {FieldsModule} from "./fields/fields.module";
import {MatModule} from "./mat.module";
import {UserModule} from "./user/user.module";
import Amplify from 'aws-amplify';
import {ReactiveFormsModule} from "@angular/forms";
import {ClickOutsideModule} from "ng-click-outside";

import aws_exports from "src/aws-exports";
import { ContactComponent } from './contact/contact.component';
Amplify.configure(aws_exports);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,

  ],

    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatModule,
        UserModule,
        FieldsModule,
        ReactiveFormsModule,
        ClickOutsideModule
    ],

  entryComponents: [
    ConfirmDialogComponent,
    SignUpDialogComponent,
    LoginDialogComponent
  ],

  providers: [
    {provide: LOCALE_ID, useValue: 'en-GB'},
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
