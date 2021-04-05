<template>
  <v-container fluid>
    <div>
      <div v-if="loaded">
        <div class="about_us_bg">
          <v-layout
            row
            wrap
            justify-center
            style="margin-top:2%;margin-bottom:2%;"
          >
            <v-flex md1 sm5 xs5 align-self-start>
              <p
                class="about_us"
                style="margin-top:20vh;margin-right:-2vw;text-align:right"
              >
                ABOUT US
              </p></v-flex
            >
            <v-flex md3 sm12 xs12 align-self-end style="margin-top:20vh" pa-1>
              <v-img eager height="60vh" src="../assets/1.png">
                <div class="ab1"></div>
              </v-img>
            </v-flex>
            <v-flex md3 xs12 pa-1 align-self-baseline>
              <v-img eager height="90vh" src="../assets/2.png">
                <div class="b2"></div>
              </v-img>
            </v-flex>
            <v-flex md5 align-self-end px-3>
              <p class="new">
                visionary in his field, Chamika De Alwis has been taking the as
                architecture world by storm through his distinctive tastes and
                thought-provoking designs. When it comes to his work, the
                dedication and creativity he showcases knows no bounds, and his
                strive for the unconventional is increasingly prominent. This is
                something he wishes to carry on through CDA, an association
                formed with the notion of reaching more people and enriching
                their lives through elegance and luxury. The individuals
                involved in this firm are looking to break boundaries and set
                limitless precedents; it is made up of creative and passionate
                young people who bring in fresh perspectives and new ideas.
                Exceeding client expectations through combining the forces of
                opulence and intricacy, CDA aims to refine the palettes of
                everyone they work with and elevate their taste for the finer
                things in life. At their current momentum, the sky is not the
                limit for CDA, it is a mere stepping stone.
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>
      <div v-else>
        <div class="about_us_bg">
          <v-layout
            row
            wrap
            justify-center
            style="margin-top:2%;margin-bottom:2%;"
          >
            <v-flex md1 sm5 xs5 align-self-start>
              <p
                class="about_us"
                style="margin-top:20vh;margin-right:-2vw;text-align:right"
              >
                ABOUT US
              </p></v-flex
            >
            <v-flex md3 sm12 xs12 align-self-end pa-1>
              <v-img eager height="60vh" src="../assets/1.png">
                <div class="ab1"></div>
              </v-img>
            </v-flex>
            <v-flex md3 xs12 pa-1>
              <v-img eager height="90vh" src="../assets/2.png">
                <div class="b2"></div>
              </v-img>
            </v-flex>
            <v-flex md5 align-self-end px-3>
              <p class="new">
                visionary in his field, Chamika De Alwis has been taking the
                architecture world by storm through his distinctive tastes and
                thought-provoking designs. When it comes to his work, the
                dedication and creativity he showcases knows no bounds, and his
                strive for the unconventional is increasingly prominent. This is
                something he wishes to carry on through CDA, an association
                formed with the notion of reaching more people and enriching
                their lives through elegance and luxury. The individuals
                involved in this firm are looking to break boundaries and set
                limitless precedents; it is made up of creative and passionate
                young people who bring in fresh perspectives and new ideas.
                Exceeding client expectations through combining the forces of
                opulence and intricacy, CDA aims to refine the palettes of
                everyone they work with and elevate their taste for the finer
                things in life. At their current momentum, the sky is not the
                limit for CDA, it is a mere stepping stone.
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showWithDelay: false,
    loaded: true,
  }),
  mounted() {
    setTimeout(() => {
      this.showWithDelay = true;
    }, 2000);
    this.hey = localStorage.getItem("isloaded");
    console.log("hello", this.hey);
    if (this.hey == "false") {
      this.loaded = false;
      console.log("false", this.loaded);
    }
  },
};
</script>

<style scoped>
.ab1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/1.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 45vh;
}
.ab1 {
  background-color: #fff;
  transform: scaleY(1);
  transform-origin: top;
  height: 100%;
  width: 100%;
}
.about_us_bg:hover .ab1 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 2s ease-in;
}
.b2con {
  /* background-color: blueviolet; */
  background-image: url("../assets/2.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 95vh;
}
.b2 {
  background-color: #fff;
  transform: scaleY(1);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  /* animation: slideInFromLeft 1.5s ease-in; */
}
.about_us_bg:hover .b2 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.5s ease-in;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.v-application p {
  margin-bottom: 1px !important;
}
.brand {
  opacity: 0.4;
  text-align: right;
  height: 30px;
}

.new {
  font-family: "Josefin Sans", sans-serif;
  margin-top: 10px;
}
.about_us {
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.5vh;
}
.title-page2 {
  font-size: 3vh;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;

  color: #8f9092c5;
}
.slide-fade {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
