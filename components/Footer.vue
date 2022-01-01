<template>
  <footer class="footer">
    <div class="follow">
      <h6>You can follow me on: </h6>
      <ul class="follow__list">
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
          <a href="https://twitter.com/GTsurwa" target="_blank">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li class="follow__list--item">
          <a href="https://www.linkedin.com/in/gilberttsurwa/" target="_blank">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li class="follow__list--item">
          <a href="https://dev.to/gillyrabuttsurwa" target="_blank">
            <i class="fab fa-dev"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="other">
      <h6>You can also checkout my:</h6>
      <ul class="other__list">
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
    <div class="other-other">
      <h6>Powered by <span class="nuxt-icon">
          <a href="https://nuxtjs.org" target="_blank">
            <i class="devicon-nuxtjs-plain"></i>
          </a>
        </span>
      </h6>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed; /* je pourrais le changer plus tard */
  bottom: 0;
  width: 100%;
  height: 20vh;

  background-color: #1a2934;
  color: #eee;
  padding: 2rem;
  font-size: 3.5rem;
}
.footer .follow,
.footer .other,
.footer .other-other {
  display: flex;
  justify-content: center;
}
.footer .follow ul,
.footer .other ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}
.footer .follow ul li,
.footer .other ul li {
  margin: 0 1.25rem;
}
.footer .follow ul li a:link,
.footer .follow ul li a:visited,
.footer .other ul li a:link,
.footer .other ul li a:visited {
  color: #eee;
}
.footer .follow ul li a:active,
.footer .follow ul li a:hover,
.footer .other ul li a:active,
.footer .other ul li a:hover,
.footer .other-other .nuxt-icon a:hover {
  text-shadow: 0 0 5px hsla(0, 0%, 100%, 0.651), 0 0 10px hsla(0, 0%, 100%, 0.555), 2px 2px 2px rgba(206, 89, 55, 0);
}
.footer .other__list--item {
  margin: 0 1rem;
}
.footer .website-version {
  text-align: center;
  margin-top: 1.3rem;
}
</style>