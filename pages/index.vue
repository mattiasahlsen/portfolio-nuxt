<template>
  <div>
    <div class="top-bar p-2 md:p-4">
      <div class="w-20 md:w-32 lg:w-40">
        <img src="../assets/me.png" class="me" />
      </div>
      <div class="center-flex">
        <h1 class="title font-bold text-3xl md:text-5xl lg:text-6xl m-2">
          <span>
            <span class="name whitespace-no-wrap">Mattias Ahlsén</span
            ><span>{{ titleText1 }}</span></span
          ><span>{{ titleText2 }}</span
          ><span v-if="titleCursor" class="blinking-cursor">|</span>
        </h1>
      </div>
    </div>

    <div class="background py-2 md:py-6 lg:py-12">
      <main class="container">
        <div class="content">
          <Project
            class="project"
            background-image="badwriter.png"
            link="https://badwriter.io"
            github="https://badwriter.io"
            description="A web application giving feedback on your CV. Uses OpenAI API."
            title="Badwriter.io"
            video="badwriter-demo.mp4"
            :featured="true"
          />
        </div>
        <div class="content">
          <!--<Project
            class="project"
            background-image="stepin.png"
            video="stepin-2.mp4"
            link="https://stepincert.com/"
            description="An education for companies and newly-arrived academics in Sweden to help utilize unused competence on the Swedish job market. A part of Engineers Without Borders. Not yet launched."
            title="StepIn Education"
          />-->
          <Project
            class="project"
            background-image="salary-calculator.png"
            link="https://mattiasahlsen.github.io/salary-calculator/"
            github="https://github.com/mattiasahlsen/salary-calculator"
            description="A web application estimating your salary using linear regression. Uses Tensorflow for Javascript."
            title="Salary Calculator"
          />

          <Project
            class="project"
            background-image="spotifyqueue.png"
            link="https://github.com/mattiasahlsen/spotify-queue"
            github="https://github.com/mattiasahlsen/spotify-queue"
            description="A web application to make shared queues for Spotify. Everybody with the link can add songs. Only the host of the queue needs a Spotify account."
            title="Shared Queues on Spotify"
          />
        </div>

        <div class="content">
          <Project
            class="project"
            background-image="spotifyfavourites.png"
            link="https://github.com/mattiasahlsen/spotify-app"
            github="https://github.com/mattiasahlsen/spotify-app"
            description="A website for easily seeing your favourite songs and artists on Spotify. Used the Spotify web API."
            title="Spotify Favourites"
          />
          <Project
            class="project"
            background-image="vue-navbar.png"
            video="vue-navbar.mp4"
            link="https://mattiasahlsen.github.io/vue-navbar"
            github="https://github.com/mattiasahlsen/vue-navbar"
            description="A reusable navigation bar component for Vue projects."
            title="Vue Navbar"
          />
        </div>

        <div class="content">
          <Project
            class="project"
            background-image="overlay-image.png"
            video="overlay-image.mp4"
            link="https://mattiasahlsen.github.io/overlay-image"
            github="https://github.com/mattiasahlsen/overlay-image"
            description="A reusable image component for Vue projects."
            title="Overlay Image"
          />
          <Project
            class="project"
            background-image="chessgame.png"
            video="chessgame.mp4"
            link="https://mattiasahlsen.github.io/jackfish/#/"
            github="https://github.com/mattiasahlsen/jackfish"
            description="A chess computer made in javascript."
            title="Chess Computer"
          />
        </div>

        <div class="content">
          <Project
            class="project"
            video="urlexp.mp4"
            background-image="urlexp.png"
            link="https://github.com/mattiasahlsen/comments"
            github="https://github.com/mattiasahlsen/comments"
            description="A website for hosting comment fields for any news articles."
            title="News Website"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";

export default {
  components: {
    Project
  },
  data() {
    return {
      titleText1: "",
      titleText2: "",
      titleCursor: false
    };
  },
  mounted() {
    this.titleCursor = true;
    setTimeout(() => {
      const titleText1 = "'s";
      const titleText2 = " Portfolio";

      this.titleCursor = false;
      const titleInterval = setInterval(() => {
        if (this.titleText1.length === titleText1.length) {
          if (this.titleText2.length === titleText2.length) {
            clearInterval(titleInterval);
          } else {
            this.titleText2 += titleText2.charAt(this.titleText2.length);
          }
        } else {
          this.titleText1 += titleText1.charAt(this.titleText1.length);
        }
      }, 100);
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/imports.scss";

.hero-text {
  font-weight: bold;
}
.name {
  color: $link-color;
}
.title {
  color: $light-2;
}
.me-container {
  -webkit-flex: 0 1 200px;
  flex: 0 1 200px;
}
.me {
  width: 100%;
  border-radius: 5px;
}

.top-bar {
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: -webkit-flexbox;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: $secondary;
}

.content {
  display: flex;
  justify-content: space-around;
}
.background {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url("../assets/background.jpg");
  background-position: center;
  background-size: cover;
}
.project {
  flex: 1 0 0;
  margin: 1em;
}
@media (max-width: $sm) {
  .project {
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
@media (max-width: $lg) {
  .content {
    flex-direction: column;
  }
}

// blinking cursor
.blinking-cursor {
  font-weight: bold;
  color: #2e3d48;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: $light-2;
  }
}
</style>
