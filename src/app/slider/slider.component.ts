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
      description: 'El modo Joust en Smite es una modalidad más rápida y menos compleja que Conquista, enfocada en enfrentamientos más directos entre equipos de tres jugadores. A diferencia de Conquista, donde el mapa es más grande y hay múltiples carriles, Joust se desarrolla en un mapa más pequeño y con solo un carril principal. Este formato promueve peleas frecuentes y una mayor acción en un entorno más controlado.'
    },
    {
      image: 'slashmapanf.png',
      description: 'El modo Slash en Smite es un modo de juego híbrido que combina elementos de dos mapas populares del pasado: Siege y Clash. Lanzado en 2022, Slash ofrece una experiencia rápida, intensa y llena de acción con equipos de cinco jugadores, en un mapa que tiene dos carriles y una pequeña jungla. Este modo está diseñado para ser dinámico y emocionante, con un enfoque en peleas constantes, control de objetivos, y destrucción rápida de las estructuras enemigas.'
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
