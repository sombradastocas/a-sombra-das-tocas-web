import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, shareReplay } from 'rxjs';
import { BlogPost, BlogSummary } from '../../models/blog/blog.model';

const BASE = 'blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
    private http = inject(HttpClient);

    private list$ = this.http.get<BlogSummary[]>(`${BASE}/index.json`).pipe(
        map(list => list.map(p => ({
            ...p,
            heroUrl: `${BASE}/${p.slug}/${p.hero}`,
            cardUrl: `${BASE}/${p.slug}/${p.card}`
        }))),
        shareReplay(1)
    );

    getAll() {
        return this.list$;
    }

    getBySlug(slug: string) {
        return this.http.get<BlogPost>(`${BASE}/${slug}/post.json`).pipe(
            map(p => ({ ...p, imageUrl: `${BASE}/${slug}/${p.imageUrl}` })),
            catchError(() => of(undefined))   // slug inexistente → sem artigo
        );
    }
}
