import { Component } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { BtnComponent } from '../../components/btn/btn.component';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverlayModule, BtnComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // icons
  faBell = faBell;
  faInfoCircle = faInfoCircle;

  // others
  isOpen = false;
}
