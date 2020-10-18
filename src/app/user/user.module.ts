import {NgModule} from "@angular/core";
import {ProfileComponent} from "../profile/profile.component";
import {SignUpDialogComponent} from "./sign-in-dialog/sign-up-dialog.component";
import {LoginDialogComponent} from "./login-dialog/login-dialog.component";
import {CommonModule} from "@angular/common";
import {MatModule} from "../mat.module";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  declarations: [
    ProfileComponent,
    SignUpDialogComponent,
    LoginDialogComponent,
  ],
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  exports: [
    ProfileComponent,
    SignUpDialogComponent,
    LoginDialogComponent,
  ],
  entryComponents: [
    SignUpDialogComponent,
    LoginDialogComponent
  ],
})
export class UserModule {
}
