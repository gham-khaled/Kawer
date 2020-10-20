import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Field} from "./field.model";
import {API} from "aws-amplify";

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

  private fields = []

  constructor() {
  }

  getFields() {
    return this.fields.slice();
  }

  async getFieldByName(name: string) {
    const item = await API.get('kawer-api', `/field/${name}`, {})
    console.log(item);
    return new Field(item["name"],
      item["latitude"],
      item["longitude"],
      item["description"],
      item["main_image"],
      item["reservation"],
      item["number_players"],
      item["amenities"],
      item["price"])


  }

  async fetchFields(queryString) {
    try {
      const items = await API.get('kawer-api', '/field', {
        'queryStringParameters': queryString
      })
      const fields = items.map(item => new Field(item["name"],
        item["latitude"],
        item["longitude"],
        item["description"],
        item["main_image"],
        item["reservation"],
        item["number_players"],
        item["amenities"],
        item["price"]
      ))
      this.fieldsChanged.next(fields)
    } catch (e) {
      console.log(e);
    }
  }

}
