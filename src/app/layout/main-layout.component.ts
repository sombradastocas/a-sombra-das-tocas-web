import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [RouterOutlet, RouterLink, RouterLinkActive],
    templateUrl: './main-layout.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {}
