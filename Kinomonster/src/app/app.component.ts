import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    RouterModule,
    FooterComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private http = inject(HttpClient);
  message = '';

  constructor() {
    this.http
      .get<{ message: string }>('http://localhost:8000/api/hello/')
      .subscribe({
        next: (res) => (this.message = res.message),
        error: (err) => console.error('Ошибка запроса:', err),
      });
  }
}
