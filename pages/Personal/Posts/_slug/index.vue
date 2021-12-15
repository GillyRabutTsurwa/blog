<template>
  <div>
    <article class="blog-container">
      <div class="blog-img-container">
        <img v-bind:src="require(`~/assets/img/${article.img}`)" alt="article.alt">
      </div>

      <div class="blog-content">
        <h2 class="blog-content__title">{{article.title}}</h2>
        <p class="blog-content__description">{{article.description}}</p>
        <p class="blog-content__date">Post Created: {{formatDate(article.createdAt)}} (Updated on {{formatDate(article.updatedAt)}})</p>
        <!-- <p class="blog-content__date">Post Updated: {{formatDate(article.updatedAt)}}</p> -->
        <nav class="blog-content__navigation">
          <h4 @click="toggleToc" class="blog-content__navigation--title">{{isTocToggled ? "Table of Contents" : "Click to Show Table of Contents"}}</h4>
          <ul v-if="isTocToggled" class="blog-content__navigation--toc">
            <li v-for="currentArticleLink of article.toc" v-bind:key="currentArticleLink.id">
              <NuxtLink v-bind:to="`#${currentArticleLink.id}`">{{currentArticleLink.text}}</NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- meme si on peut ecrire le composant pour afficher nos articles comme ci -->
        <!-- <nuxt-content v-bind:document="article" /> -->
        <!-- desormais, je vais l'écrire ainsi pour garder le meme style que j'utilise pour les composants en general -->
        <NuxtContent v-bind:document="article" />

        <!-- <Authour v-bind:authourProp="article.authour" /> -->
        <!-- <Authour v-bind:name="article.authour.name" v-bind:bio="article.authour.bio" v-bind:imgSrc="article.authour.img" /> -->
        <!-- <Authour v-bind:authour="article.authour" /> -->
        <PrevNext v-bind:prev="prev" v-bind:next="next" class="prev-n-next"></PrevNext>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  //   name: "BlogPageSingle",
  async asyncData(context) {
    // NOTE: i prefer to destructure here, below than in the function argument, ce m'est plus clair
    const { $content, params } = context;
    console.log(params);
    // params.slug must match folder name in markdown file. this is the connexion. otherwise there will be an error
    const article = await $content("articles/personal", params.slug).fetch();
    console.log(article);

    /**
     * this is an array with two values inside
     * if the current article is surrounded with by articles on either side (ie) article 2 is surrounded by 1 and 3
     *    the array will consist of objects containing the articles that come before and after the current article respectively
     * otherwise, if there isn't on article on one side (ie) article 1 doesn't have an article before it
     *    the value will be null instead of an object, since there is not article
     * also, i'm putting in its own variable for now, as the console.log() helps understanding what is going on
     * for production i will do it like I've done it above
     */
    const prevAndNextArticles = $content("articles/personal").only(["title", "slug"]).sortBy("createdAt", "asc").surround(params.slug).fetch();
    console.log(prevAndNextArticles); // without await this return a Promise, but you can still see the value in the console upon inspeccion

    //
    const [prev, next] = await prevAndNextArticles;

    return {
      article: article,
      prev: prev,
      next: next,
    };
  },

  data() {
    return {
      isTocToggled: false,
    };
  },

  methods: {
    formatDate(currentDate) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return new Date(currentDate).toLocaleDateString("en-GB", options);
    },
    toggleToc() {
      // Toc = Table of contents
      this.isTocToggled = !this.isTocToggled;
    },
  },

  // NOTE: je prevois à faire beaucoup de choses dans ce hook "created". on va bientôt voir
  created() {
    // console.log(this); // TODO: en y revenant, essayer de destructurer l'objet this
    // console.log(this.article.title);
  },
};
</script>

<style>
@import "~/assets/css/main.css";

.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  min-height: 100vh;
}

.blog-img-container,
.blog-content {
  height: 100%;
}

.blog-img-container {
  position: sticky;
  top: 0;
  height: 100vh;
}

.blog-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
}

.blog-content__title {
  font-weight: bolder;
  font-size: 5rem;
}

.blog-content__description {
  font-size: 2.25rem;
}

.blog-content__date {
  font-weight: bold;
  font-style: italic;
}

.blog-content__navigation {
  width: 50rem;
  margin: 0 auto;
}

.blog-content__navigation--title {
  text-align: center;
  font-weight: bold;
}

.blog-content__navigation--toc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-content__navigation--toc li {
  margin: 0.55rem;
}

/*  */

.nuxt-content-container {
  padding: 3rem;
}

.nuxt-content h2,
.nuxt-content h3,
.nuxt-content h4 {
  font-weight: bold;
}

.nuxt-content h2 {
  font-size: 2.8rem;
}

.nuxt-content h3 {
  font-size: 2.2rem;
}

.nuxt-content p {
  margin-bottom: 2rem;
}

/* .icon.icon-link {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;

  background-image: url("~assets/svg/icon-arrow-right.svg");
  background-size: 1.5rem 1.5rem;

  margin-right: 1rem;
} */

.prev-n-next {
  margin: 1.5rem 2rem;
}

/* TESTING */

.note {
  text-transform: uppercase;
}

.nuxt-content-highlight {
  position: relative;
}

.nuxt-content-hightlight .filename {
  position: absolute;
  right: 0;
  color: pink;
  background-color: teal;
}
</style>