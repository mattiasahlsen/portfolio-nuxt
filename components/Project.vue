<template>
  <div class="project-container">
    <div class="border">
      <div>
        <div class="aspect-ratio">
          <div
            class="image-container"
            @mouseenter="mouseEnter"
            @mouseleave="mouseLeave"
          >
            <a target="_blank" :href="link" class="project-link">
              <video
                v-if="video"
                ref="video"
                class="project-video"
                :poster="require('../assets/' + backgroundImage)"
                loop
              >
                <source :src="require('../assets/' + video)" type="video/mp4">
              </video>
              <div
                v-else
                class="project-image"
                :class="{ zoom: hover }"
                :style="{ backgroundImage: `url('${require('../assets/' + backgroundImage)}')` }"
              />
              <div class="on-hover center-flex">
                <h2 :class="{ showLink: hover }" class="link-text">Go to website</h2>
                <div :class="{ darken: hover }" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="project-links">
      <a v-if="github" target="_blank" :href="github">
        {{ title }}
      </a>
      <a v-else target="_blank" :href="link">
        {{ title }}
      </a>
      <p v-if="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['backgroundImage', 'video', 'link', 'github', 'description', 'title'],
  data() {
    return {
      hover: false,
    }
  },
  mounted() {
    if (this.video) {
      this.$refs.video.defaultPlaybackRate = 2.0
      this.$refs.video.load()
    }
  },
  methods: {
    mouseEnter() {
      this.hover = true
      if (this.video) {
        this.$refs.video.play()
      }
    },
    mouseLeave() {
      this.hover = false
      if (this.video) {
        this.$refs.video.pause()
        this.$refs.video.currentTime = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/imports.scss";

.project-container {
  -webkit-box-shadow: 10px 9px 10px -7px rgba(82,78,82,1);
  -moz-box-shadow: 10px 9px 10px -7px rgba(82,78,82,1);
  box-shadow: 10px 9px 10px -7px rgba(82,78,82,1);
  background-color: $light-2;
}
.aspect-ratio {
  width: 100%;
  padding-top: 51%;
  position: relative;
  overflow: hidden;
}
.image-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.project-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition-duration: 0.2s;
}
.project-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.zoom {
  transform: scale(1.1);
}

.project-link {
  text-decoration: none;
}
.link-text {
  color: $light-2;
  z-index: 10;
  transition: opacity 0.2s;
  opacity: 0;
  font-size: 1.2em;
  font-weight: bold;
}
.showLink {
  opacity: 1;
}
.on-hover {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.darken {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
}
.border {
  border-top-right-radius: 0.2em;
  border-top-left-radius: 0.2em;
  background-color: $secondary;
  padding: 1em;
  border: none;
}

.project-links {
  margin: 2em;
  border-bottom-right-radius: 0.2em;
  border-bottom-left-radius: 0.2em;
}

.title {
  color: $dark-2;
}
</style>
