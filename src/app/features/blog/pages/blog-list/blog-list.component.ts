import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogService } from '../../../../core/services/blog/blog.service';

@Component({
    selector: 'app-blog-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './blog-list.component.html',
    styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
    articles = toSignal(inject(BlogService).getAll(), { initialValue: [] });
    featuredArticle = computed(() => this.articles().find(a => a.featured));
    regularArticles = computed(() => this.articles().filter(a => !a.featured));
}
