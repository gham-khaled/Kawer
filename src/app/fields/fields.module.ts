import {NgModule} from "@angular/core";
import {ListFieldsComponent} from "./list-fields/list-fields.component";
import {FieldDetailComponent} from "./field-detail/field-detail.component";
import {CarouselComponent} from "./field-detail/carousel/carousel.component";
import {SchedulerComponent} from "./field-detail/scheduler/scheduler.component";
import {ConfirmDialogComponent} from "./field-detail/scheduler/confirm-dialog/confirm-dialog.component";
import {FieldsComponent} from "./fields.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {AgmCoreModule} from "@agm/core";
import {SchedulerModule} from "angular-calendar-scheduler";
import {MatModule} from "../mat.module";
import { AddFieldComponent } from './add-field/add-field.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFileUploadModule} from "mat-file-upload";

@NgModule({
  declarations: [
    FieldsComponent,
    ListFieldsComponent,
    FieldDetailComponent,
    CarouselComponent,
    SchedulerComponent,
    ConfirmDialogComponent,
    AddFieldComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    SchedulerModule.forRoot({locale: 'en', headerDateFormat: 'daysRange'}),
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FieldsComponent,
    ListFieldsComponent,
    FieldDetailComponent,
    CarouselComponent,
    SchedulerComponent,
    ConfirmDialogComponent
  ]

})
export class FieldsModule {
}
