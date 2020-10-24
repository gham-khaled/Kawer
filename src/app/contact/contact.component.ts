import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import 'rxjs/add/observable/interval';
import {interval} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  showText
  constructor() {
  }

  ngOnInit(): void {
    interval(1000).subscribe(x => {
      const distance = this.countDownDate - new Date().getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.showText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    });

  }

}
