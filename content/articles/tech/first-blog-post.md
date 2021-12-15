---
title: My First Blog Post
description: Learning how to use @nuxt/content to create a blog
img: first-blog-post.jpg
alt: my first blog post
authour:
    name: Gilbert
    bio: Gilbert's Summer in Winchester
    img: authour-img.jpg
---

<!-- ============================================================== -->


### My first blog post
Voici un poste dédié à apprendre @nuxt/content

### This is a heading

This is some more info

#### This is a sub heading

This is some more info

#### This is another sub heading

This is some more info

### This is another heading

This is some more info

<!-- ============================================================== -->

<div class="p-4 m-4 text-white bg-blue-500 note">
    Voici du code HTML dans le Markdown, ayant une class de "note"
</div>

<!-- ============================================================== -->

<!-- les bloques de code ne marche PAS lorsque on les mets à la fin du fichier -->
<!-- but it works: PASS. come back and style later -->
```js [nuxt.config.js]
export default {
  nuxt: "is the best"
}
```

```html [my-first-blog-post.md]
<p>code styling is easy</p>
```

<InfoBoite>
    <template v-slot:info-boite>
        This is a vue component inside our markdown file using slots
    </template>
</InfoBoite>
