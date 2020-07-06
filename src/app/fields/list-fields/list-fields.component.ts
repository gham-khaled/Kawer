import { Component, OnInit } from '@angular/core';
import {isToday} from "date-fns";

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.css']
})
export class ListFieldsComponent implements OnInit {

  hours = []
  constructor() { }
  ngOnInit(): void {
    for (let i = 9 ; i < 22 ; i++) {
      this.hours.push(i)
    }
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return day > new Date() || isToday(day)
  }
  fieldImgs = [1,2,3]


}
