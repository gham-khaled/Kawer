import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-detail',
  templateUrl: './field-detail.component.html',
  styleUrls: ['./field-detail.component.css']
})
export class FieldDetailComponent implements OnInit {
  public slides = [
    { src: "assets/images/field-detail/main-photo.png" },
    { src: "assets/images/field-detail/thumbnail1.png" },
    { src: "assets/images/field-detail/main-photo.png" },
    { src: "assets/images/field-detail/main-photo.png" },
    { src: "assets/images/field-detail/thumbnail2.png" },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onActiveImage () {

  }

}
