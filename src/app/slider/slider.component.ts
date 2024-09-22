import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  images = [
    { src: 'favicon.ico', description: 'Mapa del modo Just' },
    { src: 'favicon.ico', description: 'Otro mapa interesante' }
  ];
  currentIndex = 0;

  get currentImage() {
    return this.images[this.currentIndex].src;
  }

  get currentDescription() {
    return this.images[this.currentIndex].description;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}

