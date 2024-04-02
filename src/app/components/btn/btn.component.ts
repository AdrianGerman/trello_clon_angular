import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  // gray-light

  get colors() {
    return {
      'text-white': this.color === 'success' || this.color === 'primary',
      'text-gray-700': this.color === 'gray-light',
      'bg-success-600': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-blue-600': this.color === 'sky',
      'hover:bg-blue-800': this.color === 'sky',
      'focus:ring-blue-300': this.color === 'sky',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light',
    };
  }
}
