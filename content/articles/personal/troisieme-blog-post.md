---
title: Troisieme Poste
description: We out here
img: third-blog-post.jpg
alt: my third blog post
authour:
    name: Gilbert
    bio: Gilbert's Summer in Winchester
    img: authour-img.jpg
---

<!-- ============================================================== -->


### My third blog post
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

<div class="p-4 m-4 text-white bg-blue-500">
    Voici du code HTML dans le Markdown, ayant une class de "note"
</div>

<!-- ============================================================== -->

<InfoBoite>
    <template v-slot:info-boite>
        This is a vue component inside our markdown file using slots
    </template>
</InfoBoite>

```js[nuxt.config.js]
export default {
    nuxt: "is the best"
}
```