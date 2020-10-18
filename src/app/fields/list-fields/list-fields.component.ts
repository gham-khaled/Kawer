import {Component, OnInit} from '@angular/core';
import {isToday} from "date-fns";
import {FieldsService} from "../fields.service";
import {Field} from "../field.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from 'rxjs/operators';
import {API} from 'aws-amplify';

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.css']
})


export class ListFieldsComponent implements OnInit {
  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  markers: marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: '90',
      draggable: false
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B',
      draggable: false
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C',
      draggable: true
    }
  ]
  queryStringParameters = {}
  hours = []
  fields: Field[]


  constructor(private fieldsService: FieldsService, private formBuilder: FormBuilder) {
  }

  formInput: FormGroup = this.formBuilder.group({
    number: new FormControl('',),
    date: new FormControl('',),
    hour: new FormControl('',),
    price: new FormControl('')
  })

  ngOnInit(): void {
    for (let i = 9; i < 22; i++) {
      this.hours.push(i)
    }
    this.fields = this.fieldsService.getFields()
    this.queryStringParameters = {...this.formInput.value}
    console.log(this.queryStringParameters);
    Object.keys(this.formInput.controls).forEach(key => {
      this.formInput.get(key).valueChanges.pipe(debounceTime(800)).subscribe(async value => {
        console.log(value);
        await this.fieldsService.fetchData(this.formInput.value)
      });
    })
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return day > new Date() || isToday(day)
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }


  markerDragEnd(m: marker, $event: google.maps.MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  mapClicked(event) {
    console.log("Map Clicked", event);
  }


}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
