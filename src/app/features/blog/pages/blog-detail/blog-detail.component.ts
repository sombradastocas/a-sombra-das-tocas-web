import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { BlogService } from '../../../../core/services/blog/blog.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-detail',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './blog-detail.component.html',
    styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {
    private route = inject(ActivatedRoute);
    private blog = inject(BlogService);

    article = toSignal(
        this.route.paramMap.pipe(
            map(params => params.get('slug')!),
            switchMap(slug => this.blog.getBySlug(slug))
        )
    );
}
