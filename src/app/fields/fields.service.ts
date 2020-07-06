import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Field} from "./field.model";

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  fieldsChanged = new Subject<Field[]>()
  slides = [
    "assets/images/field-detail/main-photo.png",
    "assets/images/field-detail/thumbnail1.png",
    "assets/images/field-detail/main-photo.png",
    "assets/images/field-detail/thumbnail2.png",
  ];
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quam nunc pharetra ut lacinia odio nunc. Sem risus aliquam id adipiscing. Condimentum dolor eget lacus, lacinia leo orci mauris pulvinar congue. Nisl est orci quam feugiat mi, eget tortor eget arcu.\n"

  private fields = [
    new Field(0, "Camp Nou Barcelona", "Barcelona, Spain","Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "assets/images/field-list/field-list-1.png", this.slides,
      ['Wifi', 'Bar', 'Shower', 'Toilet'], 90),
    new Field(1, "Santiago Bernabeu", "Madrid, Spain", this.description,
      "assets/images/field-list/field-list-2.png", this.slides,
      ['Wifi', 'Lockers', 'Shower', 'Toilet', 'Artificial Turf'], 80),
    new Field(2, "Chedly Zouetin", "Tunis, Tunisia", this.description,
      "assets/images/field-list/field-list-3.png", this.slides,
      ['Artificial Turf', 'Lockers', 'Shower', 'Toilet'], 20)
  ]

  getFields() {
    return this.fields.slice();
  }
}
