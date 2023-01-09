import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ["@storyblok/nuxt"],
  storyblok: {
    accessToken: process.env.STORYBLOK_API_TOKEN, //NOTE: made another token. this time public
    // NOTEIMPORTANT: ADD THIS HERE
    apiOptions: {
      region: "us",
    },
  },

  // NOTEIMPORTANT: Ajouté ceci pour debarasser de cette erreur: https://github.com/nuxt/framework/issues/7341
  vite: {
    devBundler: "legacy",
  },
});

/*
An annoying habit I've always had is sleeping when things continously go wrong or when I'm in a rut. Particularly, this occurs due to circumstances that yielded to results that are far from desirable; something like a failed project or doing something in which I see no end in sight and being stuck in a limbo. Nowadays it is not nearly as bad as it used to be, but it used to be so bad that I used to sleep the day away, wake up in the middle of the night, and then sleep into the morning. Sleeping, which used to be a means of rest (and kind of a hobby, as I really like my siestas) now became a coping mechanism. I knew this was an issue because days of restful sleep — specifically, days where I woke up and felt fully rested an energised — were very few and far in between. Too much of anything can be a bad thing, and for me, that "thing" was sleep.

As a consequence, with my momentum back at zero, I find myself starting over in various areas of my life, while being fortunate enough to pick up where I left off in others. I'm sure that my excess sleep and idleness has made me miss many good opportunities and moments. The best things to do henceforth are to make the best of the time ahead, and not repeat the mistake twice. Even though my summer has been underwhelming, I am looking forward to the autumn and upcoming winter taking us to the end of the year.

However, it's not all doom and gloom, right before I got out of my rut, I was motivated to do some things, but not others. Fortunately, one of those things was revamping my blog in a way which I can create and manage my posts more efficiently. I had initially made this blog site in beginning of this year, but I downed tools on it... until now. I am confident that this time, things will stick. The site is far from completion, but I am not waiting for things to be "perfect" in order to start sharing; just good enough and presentable.

Rest — or sleep to be more specific, since that is what I'm talking about — is for allowing us to do productive things that require energy. Else, it is useless. One thing I wish I was told growing up is that rest is one of the most important things to do well, in order to improve your quality of life. Anyways, if you've reached the end thank you for taking the time to read, and next time you get some shut eye, I wish it to be a restful one for you 👍🏿.


xrKahQFGmQpGWsMPRyZhhQtt-128852-W28zaR4y6VGxSSCHecy6

*/
