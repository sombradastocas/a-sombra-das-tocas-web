import { Component, inject, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogService } from '../../../../core/services/blog/blog.service';

@Component({
    selector: 'app-blog-list',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './blog-list.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './blog-list.component.scss'
})
export class BlogListComponent {
    articles = toSignal(inject(BlogService).getAll(), { initialValue: [] });
    activeArticles = computed(() => this.articles().filter(a => a.active));
    featuredArticle = computed(() => this.activeArticles().find(a => a.featured));
    regularArticles = computed(() => this.activeArticles().filter(a => !a.featured));
}
