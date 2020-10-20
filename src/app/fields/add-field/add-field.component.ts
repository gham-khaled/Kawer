import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {API} from 'aws-amplify';
import axios from 'axios';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.css']
})
export class AddFieldComponent implements OnInit {
  amenities = [
    {"name": "shower", "checked": false},
    {"name": "wifi", "checked": false},
    {"name": "lockers", "checked": false},
    {"name": "toilet", "checked": false},
    {"name": "bar", "checked": false},
    {"name": "artificial turf", "checked": false},
  ]
  center_lat = 36.8392529
  center_long = 10.1517748
  zoom = 15
  lat = this.center_lat
  long = this.center_long

  constructor(private formBuilder: FormBuilder) {
  }

  formField: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required]),
    number_players: new FormControl('', [Validators.required, Validators.max(11), Validators.min(2)]),
    amenities: new FormControl('',),
    latitude: new FormControl('',),
    longitude: new FormControl('',),
    main_image: new FormControl('')
  })

  ngOnInit(): void {
  }

  getErrorMessage(formControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (formControl.hasError('max')) {
      return `Max number of players is ${formControl.errors.max.requiredMax}`;
    } else if (formControl.hasError('minlength')) {
      return `Minimum length is ${formControl.errors.minlength.requiredLength}`;
    }
  }


  onDragEnd($event) {
    this.lat = $event.latLng.lat()
    this.long = $event.latLng.lng()
  }

  onChange(event) {
    const i = this.amenities.findIndex(x => x.name === event.source.value);
    this.amenities[i].checked = event.checked
  }

  onFileComplete(event) {
    console.log("Filename ", event[0].name)
    // this.formField["main_image"].setValue(event[0])
    const reader = new FileReader();
    reader.onload = () => {
      this.formField.get('main_image').setValue(event[0]);
    };
    reader.readAsDataURL(event[0]);
  }

  async onSubmit() {
    const selected_amenities = this.amenities.filter(x => x.checked)
    this.formField.controls["amenities"].setValue(selected_amenities.map(x => x.name))
    this.formField.controls["longitude"].setValue(this.long)
    this.formField.controls["latitude"].setValue(this.lat)
    console.log(this.formField.controls["amenities"].value)
    let body = this.formField.value
    body = {
      ...body,
      price: +body.price,
      number_players: +body.number_players,
      reservation_date: "0",
      info: "true",
      reservation: []
    }
    const formData = new FormData();

    Object.entries(body).forEach(([key, value]) => {
      console.log(`Key ${key}: Value ${value}`)
      // @ts-ignore
      formData.append(key, value);
    });
    const url = "https://ua84sa3gl7.execute-api.us-east-1.amazonaws.com/prod/field"
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
    } catch (e) {
      console.log(e.response);
    }

  }
}
