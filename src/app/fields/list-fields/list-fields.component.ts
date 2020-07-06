import {Component, OnInit} from '@angular/core';
import {isToday} from "date-fns";
import {FieldsService} from "../fields.service";
import {Field} from "../field.model";

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.css']
})
export class ListFieldsComponent implements OnInit {

  hours = []
  fields : Field[]
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
