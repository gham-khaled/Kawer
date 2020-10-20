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
import Amplify, { API } from 'aws-amplify';

Amplify.configure({
  API: {
    endpoints: [
      {
        name: 'kawer-api',
        endpoint:'https://ua84sa3gl7.execute-api.us-east-1.amazonaws.com/prod',
        // custom_header: async () => {
        //   return {Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`}
        // }
      },
    ],
  },
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_nuwNGMUif',
    identityPoolId: 'us-east-1:5a0fae7d-0072-416d-8b8e-85f2f6b16155',
    userPoolWebClientId: '51acp0ec829t6c2a5q28njovja'
  }
});


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,

  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    UserModule,
    FieldsModule,
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
