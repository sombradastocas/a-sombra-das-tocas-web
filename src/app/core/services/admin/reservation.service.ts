import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Reservation } from '../../models/admin/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
    private http = inject(HttpClient);
    private apiAdminUrl = `${environment.apiUrl}/admin/reservation`;

    getAll() {
        return this.http.get<Reservation[]>(this.apiAdminUrl);
    }

    create(method: Partial<Reservation>): Observable<Reservation> {
        return this.http.post<Reservation>(this.apiAdminUrl, method);
    }

    update(id: string, method: Partial<Reservation>): Observable<Reservation> {
        return this.http.put<Reservation>(`${this.apiAdminUrl}/${id}`, method);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.apiAdminUrl}/${id}`);
    }
}
