<template>
  <div class="pinContainer">
    <section class="panel" :class="`panel-0`">
      <transition name="fade">
        <div class="page-loader">
          <div class="bg">
            <div id="sub-title">
              <div class="container_l">
                <div class="sub-right">
                  <div class="center_r">
                    <p>
                      <v-card flat color="transparent" class="d-flex flex-row">
                        <v-img
                          contain
                          height="30%"
                          width="20vw"
                          src="../assets/main.png"
                        ></v-img>
                      </v-card>
                    </p>
                  </div>
                </div>
              </div>
              <div class="clear-both"></div>
            </div>
          </div>
        </div>
      </transition>
    </section>
    <section class="panel" :class="`panel-1`">
      <Hero />
    </section>
  </div>
</template>
<style scoped>
body {
  margin: 0;
}
.pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.panel {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
.sub-right {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.9s linear;
  background-image: linear-gradient(to left, white, black);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}

.center {
  line-height: 100vh;
  height: 100vh;
  text-align: left;
}

.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: white;
}
.center_r {
  line-height: 100vh;
  height: 100vh;
  text-align: center;
}

.center_r p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: rgb(241, 233, 233);
  font-size: 10vh;
}

/* .container_l:hover .sub-right {
  opacity: 0;
} */
.bg {
  width: 100vw;
  background-size: 100% 100%;
  height: 100vh;
  /* background-image: url("../assets/new_main.jpg"); */
}
/* asdasd */
.error-message {
  animation: fadeOut 2s forwards;
  animation-delay: 5s;
  background: red;
  color: white;
  padding: 10px;
  text-align: center;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
<script>
import Hero from "./Hero";
export default {
  components: { Hero },
  mounted() {
    this.$nextTick(this.pinContainerScene);
  },
  data() {
    return {
      panels: [
        {
          title: "panel 1",
          bgColor: "#29b6f6",
        },
        {
          title: "panel 2",
          bgColor: "#ef5350",
        },
        {
          title: "panel 3",
          bgColor: "#ec407a",
        },
        {
          title: "panel 4",
          bgColor: "#66bb6a",
        },
      ],
    };
  },
  methods: {
    pinContainerScene() {
      const Length = 2;

      // Create a new Timeline (equivalent to new TimelineMax())
      const tl = new this.$gsap.TimelineMax();

      for (var i = 0; i < Length; i++) {
        // For each panel in this.panels array:
        let animFrom;
        switch (
          i // Set animFrom value, depending on the index i of the item
        ) {
          case 0:
            break; // First panel is already visible on page load, so no animation
          case 1:
            animFrom = { x: "-100%" }; // Second panel comes from the left
            break;
        }
        if (i !== 0) {
          // For each panel except the one whom index is 0, create the tween and add it to the tl timeline.
          // (To use GSAP easings, just prefix their name with this.$gsap)
          tl.fromTo(`section.panel-${i}`, 1.5, animFrom, {
            x: "0%",
            y: "0%",
            ease: this.$gsap.Linear.easeNone,
          });
        }
      }

      // create scene and set its params
      const scene = new this.$scrollmagic.Scene({
        triggerElement: ".pinContainer",
        triggerHook: "onLeave",
        duration: `${Length * 100}%`,
      })
        .setPin(".pinContainer")
        .setTween(tl);

      // Add scene to ScrollMagic controller by emiting an 'addScene' event on vm.$ksvuescr (which is our global event bus)
      this.$ksvuescr.$emit("addScene", "pinContainerScene", scene);

      // TAAAAAAADAAAAAAAAAAAA
    },
  },
  destroyed() {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit("destroy");
  },
};
</script>
