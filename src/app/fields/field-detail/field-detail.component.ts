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
  id: number;
  field: Field

  constructor(private fieldsService: FieldsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.field = this.fieldsService.getFieldById(this.id);
        }
      );

  }

  onActiveImage() {

  }

}
