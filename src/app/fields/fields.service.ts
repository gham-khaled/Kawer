import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Field} from "./field.model";
import {forEachComment} from "tslint";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  fieldsChanged = new Subject<Field[]>()
  slides = [
    "assets/images/field-detail/main-photo.png",
    "assets/images/field-detail/thumbnail1.png",
    "assets/images/field-detail/main-photo.png",
    "assets/images/field-detail/thumbnail2.png"
  ];
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante quam nunc pharetra ut lacinia odio nunc. Sem risus aliquam id adipiscing. Condimentum dolor eget lacus, lacinia leo orci mauris pulvinar congue. Nisl est orci quam feugiat mi, eget tortor eget arcu.\n"

  private fields = [
    new Field(0, "Camp Nou Barcelona", "Barcelona, Spain", "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "assets/images/field-list/field-list-1.png", this.slides,
      ['Wifi', 'Bar', 'Shower', 'Toilet'], 90),
    new Field(1, "Santiago Bernabeu", "Madrid, Spain", this.description,
      "assets/images/field-list/field-list-2.png", this.slides,
      ['Wifi', 'Lockers', 'Shower', 'Toilet', 'Artificial Turf'], 80),
    new Field(2, "Chedly Zouetin", "Tunis, Tunisia", this.description,
      "assets/images/field-list/field-list-3.png", this.slides,
      ['Artificial Turf', 'Lockers', 'Shower', 'Toilet'], 20)
  ]

  constructor(private http: HttpClient) {
  }

  getFields() {
    return this.fields.slice();
  }

  getFieldById(id: number) {
    for (let i = 0; i < this.fields.length; i++) {
      if (this.fields[i].id === id) {
        return this.fields[i]
      }
    }
  }

  fetchFields() {
    return this.http
      .get<Field[]>(
        'API'
      )
      .pipe(
        map(fields => {
          return fields.map(field => {
            return {
              ...field,
              imagesPath: this.slides
            };
          });
        }),
        tap(fields => {
          this.fields = fields;
        })
      );
  }
}
