import {Component, OnInit} from '@angular/core';
import {isToday} from "date-fns";
import {FieldsService} from "../fields.service";
import {Field} from "../field.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from 'rxjs/operators';
import {API} from 'aws-amplify';
import {Subscription} from "rxjs";
import {stringify} from "querystring";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-list-fields',
  templateUrl: './list-fields.component.html',
  styleUrls: ['./list-fields.component.scss']
})


export class ListFieldsComponent implements OnInit {
  // google maps zoom level
  zoom: number = 14;
  previousMarker = null
  // initial center position for the map
  lat: number = 36.8392529;
  lng: number = 10.1517748;
  markers: marker[]
  isLoading: boolean = true
  hours = []
  fields: Field[]
  fieldSubscription: Subscription

  constructor(private fieldsService: FieldsService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  formInput: FormGroup = this.formBuilder.group({
    number: new FormControl('',),
    date: new FormControl('',),
    hour: new FormControl('',),
    price: new FormControl('')
  })

  ngOnInit(): void {
    let initialQueryString = {}
    for (let i = 9; i < 22; i++) {
      this.hours.push(i)
    }
    this.route.queryParams.subscribe(params => {
      initialQueryString = params
    });

    this.fieldSubscription = this.fieldsService.fieldsChanged.subscribe(fields => {

      this.fields = fields
      this.markers = this.fields.map(field => {
        return {
          lat: field.latitude,
          lng: field.longitude,
          name: field.name,
          image: field.main_image,
          label: field.price.toString(),
          draggable: false
        }
      })
      this.isLoading = false
    })


    Object.keys(this.formInput.controls).forEach(key => {
      this.formInput.get(key).valueChanges.pipe(debounceTime(800)).subscribe(async value => {
        const queryString = {...this.formInput.value, date: this.formInput.controls["date"].value.toString()}
        this.isLoading = true
        await this.fieldsService.fetchFields(queryString)
      });
    })
    this.fieldsService.fetchFields(initialQueryString).then(x => console.log("Fetched Data"))

  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date());
    return day > new Date() || isToday(day)
  }

  clickedMarker(infoWindow) {
    if (this.previousMarker) {
      this.previousMarker.close();
    }
    this.previousMarker = infoWindow;
  }


  markerDragEnd(m: marker, $event: google.maps.MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  mapClicked(event) {
    console.log("Map Clicked", event);
  }


}

// just an interface for type safety.
class marker {
  lat: number;
  lng: number;
  label: string;
  image: string;
  name: string;
  draggable: boolean;
}
