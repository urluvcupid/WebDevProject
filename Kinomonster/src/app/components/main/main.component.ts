// home.component.ts
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {
  @ViewChild('heroSection') heroSection!: ElementRef;

  goToMovie() {
    window.location.href = '/movie';
  }

  ngAfterViewInit(): void {
    const slides: NodeListOf<HTMLElement> =
      this.heroSection.nativeElement.querySelectorAll('.hero > li');
    const dots: NodeListOf<HTMLElement> =
      this.heroSection.nativeElement.querySelectorAll(
        '.next-main-slider-dots > span'
      );
    const interval = 4;
    let activeSlide = 0;

    const reset = () => {
      dots.forEach((dot) => dot.removeAttribute('class'));
      if (dots[activeSlide]) dots[activeSlide].className = 'active';

      slides.forEach((slide) => (slide.style.display = 'none'));
      if (slides[activeSlide]) slides[activeSlide].style.display = 'block';
    };

    reset();

    setInterval(() => {
      reset();
      activeSlide = (activeSlide + 1) % slides.length;
    }, interval * 1000);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        activeSlide = index;
        reset();
      });
    });

    // Scroll logic
    const checkpoint = 600;
    let nav_bg = 'transparent';
    let opacity = 1;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= checkpoint) {
        nav_bg = 'transparent';
        opacity = 1 - currentScroll / checkpoint;
      } else {
        nav_bg = '#000';
        opacity = 0;
      }

      const header = document.querySelector('.header-nav') as HTMLElement;
      if (header) header.style.background = nav_bg;

      slides.forEach((slide) => {
        const img = slide.querySelector('img');
        if (img) (img as HTMLElement).style.opacity = String(opacity);
      });
    });

    // Mobile menu toggle
    const menu = document.querySelector('.mobile-btn') as HTMLElement;
    const submenu = document.querySelector(
      '.second-menu-mobile'
    ) as HTMLElement;
    let is_open = 0;

    if (menu && submenu) {
      menu.addEventListener('click', () => {
        submenu.style.display = is_open ? 'none' : 'block';
        is_open = is_open ? 0 : 1;
      });
    }
  }
}
