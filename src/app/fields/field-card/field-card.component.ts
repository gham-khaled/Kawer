import {ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Field} from "../field.model";

@Component({
  selector: 'app-field-card',
  templateUrl: './field-card.component.html',
  styleUrls: ['./field-card.component.scss'],

})
export class FieldCardComponent implements OnInit {
  @Input() field: Field
  constructor() { }

  ngOnInit(): void {
  }

}
