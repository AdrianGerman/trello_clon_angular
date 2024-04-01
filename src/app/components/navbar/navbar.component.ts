import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverlayModule, BtnComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isOpen = false;
}
