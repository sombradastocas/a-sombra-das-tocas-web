import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    credentials = { email: '', password: '' };
    isLoading = false;
    showPassword = false;
    errorMessage = '';

    private authService = inject(AuthService);
    private router = inject(Router);

    login() {
        if (this.isLoading || !this.credentials.email || !this.credentials.password) return;

        this.isLoading = true;
        this.errorMessage = '';

        this.authService.login(this.credentials).subscribe({
            next: () => this.router.navigate(['/admin/dashboard']),
            error: (err) => {
                console.error('Erro de login', err);
                this.errorMessage = 'Email ou password incorretos. Verifica os dados e tenta novamente.';
                this.isLoading = false;
            }
        });
    }
}
