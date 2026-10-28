import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './terms.component.html'
})
export class TermsComponent {

}
