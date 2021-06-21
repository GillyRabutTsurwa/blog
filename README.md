## Summary

- created our markdown files from which we will later retrieve our blog information, and convert them to pages
- below is the folder structure for my nuxt app blog application. the three relevant markdown files are the ones that are found under the articles directory, which is in turn found under the content directory, which is the essential catalyst of getting the Nuxt Content functionality to work.
  - i'm not sure if the articles directory is important, but i really like it for organisation purposes
- not related, but this tree package, that allows me to display my files and folders in a tree-like structure, is very neat

```markdown
├── assets
│   └── README.md
├── components
│   ├── Logo.vue
│   └── README.md
├── content
│   └── articles
│       ├── first-blog-post.md
│       ├── second-blog-post.md
│       └── third-blog-post.md
├── jest.config.js
├── jsconfig.json
├── layouts
│   ├── default.vue
│   └── README.md
├── middleware
│   └── README.md
├── nuxt.config.js
├── package.json
├── package-lock.json
├── pages
│   ├── index.vue
│   └── README.md
├── plugins
│   └── README.md
├── README.md
├── static
│   ├── favicon.ico
│   ├── icon.png
│   ├── README.md
│   └── sw.js
├── store
│   └── README.md
└── test
    └── Logo.spec.js
```