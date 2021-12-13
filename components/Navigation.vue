<template>
  <div class="navigation">
    <input type="checkbox" name="navigation" id="navi-toggle" class="navigation__checkbox">
    <label for="navi-toggle" class="navigation__button" v-bind:class="{fadeIn: isFadedInBtn}">
      <span class="navigation__icon"></span>
    </label>
    <div class="navigation__background" v-bind:class="{fadeIn: isFadedInBg}">&nbsp;</div>
    <nav class="navigation__nav">
      <!-- <ul class="navigation__nav--list">
        <li class="navigation__nav--list-item"><a href="https://github.com/GillyRabutTsurwa" target="__blank" class="navigation__nav--list-link">Github Profile</a>
        </li>
        <li class="navigation__nav--list-item"><a href="./docs/GilbertRabutTsurwa-Résumé.docx" class="navigation__nav--list-link">Résumé</a></li>
        <li class="navigation__nav--list-item"><a href="mailto:tsurwagilbert@gmail.com" class="navigation__nav--list-link">E-mail Me</a>
        </li>
        <li class="navigation__nav--list-item"><a href="#" class="navigation__nav--list-link">My Blog (Coming Soon)</a>
        </li>
      </ul> -->
      <div class="about-me">
        <h2>About Me</h2>
        <div>
          <p>
            Yo (this is my blog and not my portfolio so I can be more informal here). My name is Gilbert, I am 24 years young, and I am a web developer. I am from Nairobi, Kenya (most of you don't know what a Kenya is), but I've lived in the United States for a while now. I currently reside in Virginia after moving from the tundraland that is Minnesota. I speak 3 languages: English, Swahili, and French. I am currently learning Spanish and considering to learn German further in the future. I have spent most of my life learning languages; coding and spoken languages alike.
          </p>
          <p>I enjoy learning about web development -- particulary the front-end. You probably already knew that. I also enjoy playing football (the sport the weird ones call soccer), reading books and watching quirky funny comedy series; like Scrubs, Parks & Recreation, and Brooklyn Nine-Nine; just to name a few. I do like some anime as well, but most of it is too emotional for me. I also like long walks on the beach (this isn't a bio for a dating app, I promise you), long drives to natural sites and landmarks, and strolling around new places. Strolling > Hiking, but I am getting around to hiking. My favourite genres of music include lofi-beats, house, and vapourwave. I'll highly likely talk about music in future posts but to have an idea on what I like to listen, follow my on Spotify, the link will be below.
          </p>
          <p>
            That's all I can think of saying for now. By the time you see this, this part of the bio will be changed by some things more relevant, of which I am having trouble thinking of at the moment. If you would like to get to know me and see my skills as a developer, consult my <a href="https://gilbertrabuttsurwa.tech" target="_blank">web portfolio</a>.
          </p>
          <div>
            Follow me on:
            <ul class="social-icons-list">
              <li class="follow__list--item">
                <a href="https://www.facebook.com/rabuttsurwa/" target="_blank">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li class="follow__list--item">
                <a href="https://www.instagram.com/rabuttsurwa96/" target="_blank">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li class="follow__list--item">
                <a href="https://www.linkedin.com/in/gilberttsurwa/" target="_blank">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li class="other__list--item">
                <a href="https://open.spotify.com/user/tsurwagilly" target="_blank">
                  <i class="fa fa-spotify" aria-hidden="true"></i>
                </a>
              </li>
              <li class="other__list--item">
                <a href="https://bandcamp.com/gtsurwa" target="_blank">
                  <i class="fa fa-bandcamp" aria-hidden="true"></i>
                </a>
              </li>
              <li class="other__list--item">
                <a href="https://soundcloud.com/tsurwagilly" target="_blank">
                  <i class="fa fa-soundcloud" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFadedInBtn: false,
      isFadedInBg: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isFadedInBtn = true;
    }, 2600);
    setTimeout(() => {
      this.isFadedInBg = true;
    }, 3600);
  },
};
</script>

<style>
.navigation__checkbox {
  display: none;
}
.navigation__button {
  display: flex;
  justify-content: center;
  background-color: #fff;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 3rem;
  /* right: 3rem; */
  right: 50%;
  transform: translateX(50%);
  border: 2px solid #433336;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease;
}
.navigation__button.fadeIn {
  opacity: 1;
  visibility: visible;
}
.navigation__background {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 3.5rem;
  /* right: 3.5rem; */
  transform: translateX(50%);
  right: 50%;
  background-image: linear-gradient(to top right, #1a2934, rgba(26, 41, 52, 0.870588));
  z-index: 1000;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
  opacity: 0;
  visibility: hidden;
}
.navigation__background.fadeIn {
  opacity: 1;
  visibility: visible;
}
.navigation__nav {
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* TESTING */
.navigation .about-me {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  /* margin: 0 3rem; */
  color: #fff;
}

.navigation .about-me h2 {
  align-self: center;
  font-size: 9rem;
}

.navigation .about-me p {
  font-size: 2rem;
  padding: 3rem;
  text-align: left;
}

/* removed */
.navigation__nav--list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  text-align: center;
  width: 100%;
}
.navigation__nav--list-item {
  margin: 1.5rem;
}
.navigation__nav--list-item:last-child a {
  cursor: not-allowed;
}
.navigation__nav--list-link::last-child {
  background-color: pink;
}
.navigation__nav--list-link:link,
.navigation__nav--list-link:visited {
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  padding: 1rem 2rem;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  background-image: linear-gradient(120deg, transparent, transparent 50%, #fff 0);
  background-size: 220%;
  transition: all 0.4s;
}
.navigation__nav--list-link:active,
.navigation__nav--list-link:hover {
  background-position: 100%;
  color: #1a2934;
  transform: translateX(1rem);
}
.navigation__checkbox:checked ~ .navigation__background {
  transform: scale(80);
}
.navigation__checkbox:checked ~ .navigation__nav {
  opacity: 1;
  width: 100%;
}
.navigation__icon {
  position: relative;
  margin-top: 3.5rem;
}
.navigation__icon,
.navigation__icon:after,
.navigation__icon:before {
  display: inline-block;
  width: 3rem;
  height: 2px;
  background-color: #333;
}
.navigation__icon:after,
.navigation__icon:before {
  content: "";
  position: absolute;
  left: 0;
  transition: all 0.2s;
}
.navigation__icon:before {
  top: -0.8rem;
}
.navigation__icon:after {
  top: 0.8rem;
}
.navigation__button:hover .navigation__icon:before {
  top: -1rem;
}
.navigation__button:hover .navigation__icon:after {
  top: 1rem;
}
.navigation__checkbox:checked + .navigation__button .navigation__icon {
  background-color: transparent;
}
.navigation__checkbox:checked + .navigation__button .navigation__icon:before {
  top: 0;
  transform: rotate(225deg);
}
.navigation__checkbox:checked + .navigation__button .navigation__icon:after {
  top: 0;
  transform: rotate(-225deg);
}

/* TESTING */
.social-icons-list {
  list-style-type: none;
  display: flex;
  justify-content: center;
  font-size: 2.75rem;
}

.social-icons-list li {
  margin: 0 2.5rem;
}
</style>