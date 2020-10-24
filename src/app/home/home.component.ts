import {Component, OnInit} from '@angular/core';
import {isToday} from "date-fns";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hours = []

  formInput: FormGroup = this.formBuilder.group({
    date: new FormControl('',),
    hour: new FormControl('',),
  })

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    for (let i = 9; i < 22; i++) {
      this.hours.push(i)
    }

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return day > new Date() || isToday(day)
  }

  onFind() {
    this.router.navigate(
      ['/fields'],
      {
        queryParams: {
          hour: this.formInput.controls["hour"].value,
          date: this.formInput.controls["date"].value.toString()
        }
      })
  }

}
