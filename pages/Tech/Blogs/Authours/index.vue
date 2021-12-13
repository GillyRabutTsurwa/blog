<template>
  <div>
    <NuxtLink to="/">Back Home</NuxtLink>
    <h2>Meet The Authours</h2>
    <ul>
      <li @click="current = index; modalActivated = true" v-for="(currentArticle, index) in authourArticles" v-bind:key="currentArticle.slug">
        <img v-bind:src="require(`~/assets/img/${currentArticle.authour.img}`)" v-bind:alt="currentArticle.authour.bio">
        <div>
          <h2>{{ currentArticle.authour.name }}</h2>
          <!-- <p>{{ currentArticle.authour.bio }}</p> -->
          <p>{{ truncateBio(currentArticle.authour.bio) }}</p>
        </div>

        <ul>
          <li v-for="(currentPost, index) in fetchArticleByAuthour(articles, currentArticle.authour.name)" v-bind:key="index">
            <NuxtLink v-bind:to="`/blogs/${currentPost.slug}`">{{ currentPost.slug.split("-").join(" ") }}</NuxtLink>
          </li>
        </ul>

        <!-- // this will change dynamically upon which authour card i click and render their info below -->
        <!-- ce sera son propre composant plus tard -->
        <!-- PASS -->
        <div class="modal" v-if="modalActivated && current === index">
          <!-- Ce sera une image secondaire qui je vais ajouter pour chaque auteur -->
          <div class="modal-img-container">
            <img v-bind:src="require(`~/assets/img/${currentArticle.authour.img}`)" v-bind:alt="currentArticle.authour.bio">
          </div>

          <div class="modal-bio">
            <p>{{ currentArticle.authour.name }}</p>
            <p>{{ currentArticle.authour.bio }}</p>
          </div>

          <div class="modal-authour-paragraph">
            <p>
            <pre>{{ fullAuthourBio }}</pre>
            <nuxt-link :to="`/blogs/authours/${currentArticle.authour.name}`">SIngle authour page
            </nuxt-link>
            <NuxtContent v-bind:document="fullAuthourBio" />
            </p>
          </div>
          <!-- </div> -->
        </div>
        <!-- <pre>{{ fetchArticleByAuthour(articles, currentArticle.authour.name) }}</pre> -->
        <!-- <Authour v-bind:authour="currentArticle" /> TESTING -->
      </li>
    </ul>

    <!-- NOTEIMPORTANT: au lieu d'une page qui affiche en plus l'info sur un(e) auteur, je vais creer un composant ici dessous de la page, qui va changer selon la clique de la liste d'auteurs. je vais le designer le nom AuthourInfo -->
  </div>
</template>


<script>
export default {
  name: "AuthoursPage",
  data() {
    return {
      current: 0,
      //TESTING:
      modalActivated: false,
    };
  },
  async asyncData(context) {
    const { $content, params } = context;
    const articles = await $content("articles/tech", params.slug)
      .where({
        "authour.name": {
          $regex: [params.authour, "i"],
        },
      })
      .without("body")
      .sortBy("createdAt", "asc")
      .fetch();
    console.log(articles);

    //TESTING
    const x = new Set(); // remplacer "x" avec qq'chose de plus significatif et pertinent

    // this is so that an authour doesn't show up the number of times of the article they have written
    // if they have written 10 articles, their info won't show up 10 times but only once
    // thanks to this stackoverflow link: https://stackoverflow.com/questions/18773778/create-array-of-unique-objects-by-property
    const authourArticles = articles.filter((currentArticle) => {
      if (x.has(currentArticle.authour.name)) {
        return false;
      }
      x.add(currentArticle.authour.name);
      return true;
    });

    // NEWTESTING:
    // fetch authour bios
    let fullAuthourBio;
    authourArticles.forEach((currentArticle) => {
      fullAuthourBio = $content("authours", currentArticle.authour.name.toLowerCase()).fetch();
    });

    console.log("Full Authour Bio Settings");
    console.log(await fullAuthourBio);

    return {
      articles: articles,
      authourArticles: authourArticles,
      fullAuthourBio: fullAuthourBio,
    };
  },
  methods: {
    /**
     * this method will fetch all the articles pertaining to a certain authour in the loop
     * it will loop through all the articles
     * then only include articles who's authour name is the same as the name passed in the function
     * this is how i will post the articles by each individual authour
     */
    fetchArticleByAuthour(articles, authourName) {
      // including argument qui represente ici car je n'ai pas access au variable actuel "articles" ici, mais dans le template
      return articles.filter((currentArticle) => {
        return currentArticle.authour.name === authourName;
      });
    },
    /**
     * to truncate the bio if it's too long
     */
    truncateBio(str, startPoint = 10) {
      if (str.length > startPoint) {
        return str.slice(0, startPoint) + "...";
      } else {
        return str;
      }
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

ul:first-of-type {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 40rem));
  gap: 4rem;
  justify-content: center;
}

ul li ul:first-of-type {
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  align-items: center;
}

img {
  border: 5px solid black;
}

.fixed-authour-info {
  position: absolute;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  background-color: white;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 85vh 1fr;
  column-gap: 2rem;
}

.modal-img-container {
  height: inherit;
  grid-row: 1 / 2;
}

.modal-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-bio {
  height: inherit;
  grid-row: 2 / -1;
  font-size: 4rem;
}
</style>
