import { Component, OnInit, signal, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationService } from '../../../../../../core/services/admin/reservation.service';
import { Reservation } from '../../../../../../core/models/admin/reservation.model';
import { NotificationService } from '../../../../../../core/services/notification.service';

@Component({
    selector: 'app-reservation-list',
    standalone: true,
    imports: [CommonModule], // Importa o FeatherModule se usares ícones
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './reservation-list.component.html'
})
export class ReservationListComponent implements OnInit {
    private service = inject(ReservationService);
    private notiService = inject(NotificationService);

    movements = signal<Reservation[]>([]);
    isLoading = signal<boolean>(true);


    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.isLoading.set(true);

        this.service.getAll().subscribe({
            next: (data) => {
                this.movements.set(data);
                this.isLoading.set(false);
            },
            error: (err) => {
                const msg = err.error?.message || 'Erro desconhecido ao produzir.';
                this.notiService.error('Erro ao carregar movimentos: '+ msg);
                this.isLoading.set(false);
            }
        });
    }
}
