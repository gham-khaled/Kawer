import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  animations: [
    trigger('collapsing', [

      transition('* => *', [
        animate('15s')
      ]),

    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapse = true

  constructor() {
  }


  ngOnInit(): void {
  }

}
