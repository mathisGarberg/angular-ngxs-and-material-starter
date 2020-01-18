import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleMetaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
