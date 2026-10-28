import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@vercel/analytics'

@Component({
  selector: 'app-root',
  imports: [
      RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    ngOnInit() {
        inject();
    }
}
