import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlePreviewComponent } from './helpers/article-preview/article-preview.component';
import { ArticleListComponent } from './helpers/article-list/article-list.component';
import { ArticleMetaComponent } from './helpers/article-meta/article-meta.component';



@NgModule({
  declarations: [ArticlePreviewComponent, ArticleListComponent, ArticleMetaComponent],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
