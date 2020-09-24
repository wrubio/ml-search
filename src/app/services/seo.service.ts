import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  public generateTags(config) {
    // default values
    config = {
      title: '',
      description: '',
      image: '',
      slug: '',
      documentTitle: '',
      documentDescription: '',
      ...config
    };

    this.title.setTitle(config.documentTitle);
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:site', content: 'ML-search' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ML-search' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
    this.meta.updateTag({ property: 'og:url', content: `"http://${window.location.hostname}/${config.slug}` });

    this.meta.updateTag({ name: 'description', content: config.documentDescription })
  }

}