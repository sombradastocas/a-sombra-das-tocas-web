import { Component, inject, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../../core/services/auth.service'; // Confirma o caminho

declare var feather: any;

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: []
})
export class HeaderComponent implements AfterViewInit {

  auth = inject(AuthService);

  ngAfterViewInit() {
    if (typeof feather !== 'undefined') {
      feather.replace();
    }
  }

  logout() {
    this.auth.logout();
  }
}
