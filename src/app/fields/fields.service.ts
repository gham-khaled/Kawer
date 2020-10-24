import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Field} from "./field.model";
import {API, formRow} from "aws-amplify";
import {UserService} from "../user/user.service";

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

  constructor(private userService: UserService) {
  }

  getFields() {
    return this.fields.slice();
  }

  async getFieldByName(name: string) {
    const item = await API.get('Kawer-API', `/field/${name}`, {})
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
      const items = await API.get('Kawer-API', '/field', {
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

  async getFieldUser(user_email) {
    const items = await API.get('Kawer-API', `/user/${user_email}`, {})
    items.map(item => this.generateField(item))
    return items
  }

  async makeReservation(reservation_date, name) {
    try {
      const item = await API.post('Kawer-API', '/reservation', {
        body: {
          "reservation_date": reservation_date,
          "user_email": this.userService.getUserAttribute("email"),
          "name": name
        }

      })
    } catch (e) {
      console.log(e);
    }
  }

  private generateField(item) {
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

}
