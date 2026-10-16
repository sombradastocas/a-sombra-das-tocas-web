// blog.model.ts
export interface BlogSummary {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    featured: boolean;
    hero: string;
    card: string;
    // preenchidos pelo serviço:
    heroUrl?: string;
    cardUrl?: string;
}

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    hero: string;
    content: string;
    imageUrl?: string;   // preenchido pelo serviço
}
