import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {
  showNavigationArrows = false;
	showNavigationIndicators = false;
  images = ['../../assets/images/Card/slider2.png','../../assets/images/Card/slider.png','../../assets/images/Card/payment1.jpeg',
  '../../assets/images/Card/slider4.png',];
  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
    
  }

}
