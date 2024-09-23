import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  
  slides = [
    {
      image: 'Smitejustnf.png',
      description: 'Mapa del modo Just para 3 jugadores o duel'
    },
    {
      image: 'mapasmitenf.png',
      description: 'Descripción de la imagen 2 para el slider'
    }
  ];

  currentIndex = 0;


  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }


  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }


  getCurrentImage() {
    return this.slides[this.currentIndex].image;
  }

  
  getCurrentDescription() {
    return this.slides[this.currentIndex].description;
  }
}
