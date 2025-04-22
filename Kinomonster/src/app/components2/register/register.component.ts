import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  email = '';
  password = '';
  repeatPassword = '';

  onRegister() {
    if (this.password === this.repeatPassword) {
      console.log('Register:', this.email, this.password);
    } else {
      alert("Passwords don't match");
    }
  }
}
``;
