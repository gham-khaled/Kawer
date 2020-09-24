import {Component, OnInit} from '@angular/core';
import {Field} from "../fields/field.model";
import {FieldsService} from "../fields/fields.service";
import {isToday} from "date-fns";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hours = []

  fields: Field[]

  constructor(private fieldsService: FieldsService) {
  }

  ngOnInit(): void {
    for (let i = 9; i < 22; i++) {
      this.hours.push(i)
    }
    this.fields = this.fieldsService.getFields()
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return day > new Date() || isToday(day)
  }
}

