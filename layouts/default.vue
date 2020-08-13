<template>
  <div id="app">
    <nuxt />
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-section">
          <div class="about">
            <h2>About</h2>
            <p>
              Mattias Ahlsén is a 22-year old engineering student currently doing his
              master's degree at Uppsala University, Sweden.
            </p>
          </div>
        </div>
        <div class="credits footer-section">
          <p>Created by Mattias Ahlsén.</p>
          <p>Background photo by Clément H on Unsplash.</p>
          <p>Powered by <a target="_blank" class="light-link" href="https://vuejs.org/">Vue.js</a>.</p>
        </div>
        <div class="links footer-section">
          <h2>Contact</h2>
          <div class="icon github">
            <a target="_blank" href="https://github.com/mattiasahlsen">
              <font-awesome-icon size="2x" :icon="['fab', 'github']" />
            </a>
          </div>
          <div class="icon linkedin">
            <a target="_blank" href="https://www.linkedin.com/in/mattiasahlsen">
              <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
            </a>
          </div>
          <div class="icon mail">
            <a @click.prevent="openMail">
              <font-awesome-icon size="2x" icon="envelope" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    openMail() {
      window.location.href = 'mailto:mattias.ahlsen@gmail.com?subject=Subject&body=Message%20goes%20here'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/imports.scss';

#app {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  font-family: 'Montserrat', sans-serif;
}

.footer {
  background-color: $secondary;
  padding: 0 1em;
}
@media (max-width: $sm) {
  .footer {
    font-size: 0.8em;
  }
}
.footer-content {
  margin: 1em auto;
  display: flex;
  justify-content: space-between;

  color: $light-1;
  p {
    margin: 0;
    padding: 0;
  }
}
.footer-section {
  flex: 1 1 0;
}
.credits {
  margin-top: 4em;
}
.credits p {
  margin-bottom: 0.2em;
}
.about {
  max-width: 20em;
  text-align: left;
}
.links {
  text-align: right;
}
.icon {
  margin-bottom: 0.5em;
  color: $light-2;
  &:hover {
    cursor: pointer;
    color: $link-color;
  }
}
.linkedin {
  color: $blue-2;
}
.mail {
  color: $orange-1;
}

h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.2em;
}
</style>
