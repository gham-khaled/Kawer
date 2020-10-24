import {Component, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Field} from "../fields/field.model";
import {FieldsService} from "../fields/fields.service";
import {isToday} from "date-fns";
import {UserService} from "../user/user.service";
import {Subscription} from "rxjs";
import {User} from "../user/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  hours = []
  fields: Field[]
  user: User
  isLoading: boolean
  isLoadingPicture: boolean = false
  constructor(private fieldsService: FieldsService, private  userService: UserService) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.user = this.userService.getUser()
    this.fieldsService.getFieldUser(this.user.email).then((fields) => {
      this.fields = fields
      console.log(this.fields);
      this.isLoading = false
    })
  }

  async onFileComplete(event) {
    console.log("Filename ", event[0].name)

    const formData = new FormData();
    formData.append("name",this.user.name)
    formData.append("email",this.user.email)
    this.isLoadingPicture = true
    const reader = new FileReader();
    reader.onload = async () => {
      formData.append("picture",event[0]);
      const response = await this.userService.addPicture(formData)
      this.isLoadingPicture = false
    };
    reader.readAsDataURL(event[0]);
  }

}

