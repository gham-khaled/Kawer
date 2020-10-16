import {NgModule} from "@angular/core";
import {ListFieldsComponent} from "./list-fields/list-fields.component";
import {FieldDetailComponent} from "./field-detail/field-detail.component";
import {CarouselComponent} from "./field-detail/carousel/carousel.component";
import {SchedulerComponent} from "./field-detail/scheduler/scheduler.component";
import {ConfirmDialogComponent} from "./field-detail/scheduler/confirm-dialog/confirm-dialog.component";
import {FieldsComponent} from "./fields.component";

@NgModule({
  declarations: [
    FieldsComponent,
    ListFieldsComponent,
    FieldDetailComponent,
    CarouselComponent,
    SchedulerComponent,
    ConfirmDialogComponent

  ]

})
export class FieldsModule {}
