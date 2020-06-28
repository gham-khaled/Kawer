import {Component, Input, OnInit} from '@angular/core';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0, transform: "scale(0.5)" }), // start state
        animate(
          "500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
          style({ opacity: 1, transform: "scale(1)" })
        )
      ]),
      transition('* => void', [
        animate(
          "500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)",
          style({ opacity: 0, transform: "scale(0.5)" })
        )
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides;
  currentSlide = 3;

  constructor() { }

  ngOnInit(): void {
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
  onActiveImage (i) {
    this.currentSlide = i
  }

}
