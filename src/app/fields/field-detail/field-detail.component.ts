import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FieldsService} from "../fields.service";
import {Field} from "../field.model";

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
  field: Field
  images_list: [string]
  isLoading: boolean = true

  constructor(private fieldsService: FieldsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
          console.log(params);
          this.fieldsService.getFieldByName(params['id']).then(field => {
            this.field = field
            this.images_list = [this.field.main_image]
            this.isLoading = false
          })
        }
      );

  }

  onActiveImage() {

  }

}
