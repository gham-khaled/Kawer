import {NgModule} from "@angular/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFileUploadModule} from "mat-file-upload";

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFileUploadModule

  ],
  exports: [
    MatProgressSpinnerModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
    MatFileUploadModule


  ]
})
export class MatModule {

}
