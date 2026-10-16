import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var feather: any;

interface NavItem { label: string; link: string; icon: string; }
interface NavGroup { title: string; items: NavItem[]; }

@Component({
    selector: 'app-admin-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {

    groups: NavGroup[] = [
        { title: 'Geral', items: [
                { label: 'Dashboard', link: '/admin/dashboard', icon: 'home' }
            ]},
        { title: 'Workshop', items: [
                { label: 'Reservas', link: '/admin/reservas', icon: 'shopping-bag' },
            ]},
        { title: 'Loja e stock', items: [
                { label: 'Produtos', link: '/admin/produtos', icon: 'package' },
                { label: 'Materiais', link: '/admin/materiais', icon: 'layers' },
                { label: 'Movimentos', link: '/admin/stock-movements', icon: 'activity' }
            ]},
        { title: 'Vendas', items: [
                { label: 'Encomendas', link: '/admin/encomendas', icon: 'shopping-bag' },
                { label: 'Avaliações', link: '/admin/reviews', icon: 'star' },
                { label: 'Promoções', link: '/admin/promocoes', icon: 'tag' },
                { label: 'Métodos de envio', link: '/admin/envios', icon: 'truck' }
            ]},
        {
            title: 'Finanças',
            items:
            [
                {
                    label: 'Fluxo monetário',
                    link: '/admin/finance',
                    icon: 'dollar-sign'
                }
            ]
        }
    ];

    ngAfterViewInit() {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}
