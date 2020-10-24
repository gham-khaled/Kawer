import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FieldsService} from "../../../fields.service";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  isLoading = false

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              private fieldService: FieldsService) {
  }

  ngOnInit(): void {
    console.log(this.data)
    console.log("Sending date ", this.data["date"].toISOString())
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onBook() {
    this.isLoading = true
    this.fieldService.makeReservation(this.data["date"].toISOString(), this.data["name"]).then(() => {
      console.log("Reservation Made Successfully")
      window.location.reload();

    })
  }
}

export interface DialogData {
  price: number;
  date: Date;
}
