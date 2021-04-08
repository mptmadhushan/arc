<template>
  <v-container fluid>
    <div class="about_us_bg">
      <div v-if="loaded">
        <div>
          <v-layout
            row
            wrap
            justify-center
            style="margin-top:2%;margin-bottom:2%;"
          >
            <v-flex md1 sm5 xs5 align-self-start>
              <p
                class="about_us"
                style="margin-top:40vh;margin-right:-2vw;text-align:right"
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
                CDA are a collective of like-minded humanists. We believe the
                difference between good and great design is the human factor;
                how people interact with our spaces and how our structures
                impact lives. Drawing inspiration from all corners of the world
                and connecting it with modern ideologies. Our CDA team consists
                of young, passionately creative individuals who have fresh
                perspectives, bright new ideas, and are looking to break
                boundaries and set limitless precedents within the architecture
                industry. We aim to elevate lives and incorporate beauty in art
                to magnify spaces. The dedication we have towards our clientele,
                and the measures we take to meld their visions with our artistic
                enterprise is clear evidence of that; we strive for the
                unconventional with meticulous care and defined personality.
              </p>
            </v-flex>
          </v-layout>
        </div>
        <div style="width:99vw;height:20vh;padding:10px"></div>
        <!-- <v-layout row wrap justify-space-around>
          <v-flex md4 sm12 xs12 align-self-center>
            <v-img eager contain src="../assets/12.png"></v-img>
          </v-flex>
          <v-flex md6 sm12 xs12 align-self-center>
            <p class="pa-2 new">
              Chamika De Alwis began his career in 2003 with MICD Associates
              while pursuing a Diploma in Architecture at the City School of
              Architecture, Colombo. Following his education, he continued
              working with MICD Associates as a Senior Associate and Principal
              assistant. In 2016 he embarked on his own practice as the
              Principal Architect of C Atelier Consultants and CDA Associates.
              Since then, he’s been involved in several curatorial projects in
              Sri Lanka including the exhibition Second Skin in March 2017 and
              Revive; Ethical Use of Material in June 2017 in collaboration with
              the Colombo Fashion Week. In 2019, he curated One Won in
              collaboration with the University of the Visual and Performing
              Arts, Colombo in the aftermath of the Easter Attacks in Sri Lanka.
              He was the recipient of the Conde Nast Johansens award for
              excellence in 2020 – 21 for his work in the architecture field and
              is on the board of Trustees of the Geoffrey Bawa Trust and the
              Lunuganga Trust, respectively. With CDA he continues to excel in
              his creative endeavours and deliver intricately inventive and
              exquisite designs to his clientele.
            </p>
          </v-flex>
        </v-layout> -->
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
                style="margin-top:40vh;margin-right:-2vw;text-align:right"
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
                CDA are a collective of like-minded humanists. We believe the
                difference between good and great design is the human factor;
                how people interact with our spaces and how our structures
                impact lives. Drawing inspiration from all corners of the world
                and connecting it with modern ideologies. Our CDA team consists
                of young, passionately creative individuals who have fresh
                perspectives, bright new ideas, and are looking to break
                boundaries and set limitless precedents within the architecture
                industry. We aim to elevate lives and incorporate beauty in art
                to magnify spaces. The dedication we have towards our clientele,
                and the measures we take to meld their visions with our artistic
                enterprise is clear evidence of that; we strive for the
                unconventional with meticulous care and defined personality.
              </p>
            </v-flex>
          </v-layout>
        </div>
        <div style="width:99vw;height:20vh;padding:10px"></div>
        <!-- <v-layout row wrap justify-space-around>
          <v-flex md4 sm12 xs12 align-self-center>
            <v-img eager contain src="../assets/12.png"></v-img>
          </v-flex>
          <v-flex md6 sm12 xs12 align-self-center>
            <p class="pa-2 new">
              Chamika De Alwis began his career in 2003 with MICD Associates
              while pursuing a Diploma in Architecture at the City School of
              Architecture, Colombo. Following his education, he continued
              working with MICD Associates as a Senior Associate and Principal
              assistant. In 2016 he embarked on his own practice as the
              Principal Architect of C Atelier Consultants and CDA Associates.
              Since then, he’s been involved in several curatorial projects in
              Sri Lanka including the exhibition Second Skin in March 2017 and
              Revive; Ethical Use of Material in June 2017 in collaboration with
              the Colombo Fashion Week. In 2019, he curated One Won in
              collaboration with the University of the Visual and Performing
              Arts, Colombo in the aftermath of the Easter Attacks in Sri Lanka.
              He was the recipient of the Conde Nast Johansens award for
              excellence in 2020 – 21 for his work in the architecture field and
              is on the board of Trustees of the Geoffrey Bawa Trust and the
              Lunuganga Trust, respectively. With CDA he continues to excel in
              his creative endeavours and deliver intricately inventive and
              exquisite designs to his clientele.
            </p>
          </v-flex>
        </v-layout> -->
      </div>
      <div style="width:99vw;height:5vh;padding:10px"></div>
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
  transition-delay: 4s;
}
.ab1 {
  background-color: #fff;
  transform: scaleY(1);
  transform-origin: top;
  height: 100%;
  width: 100%;
  transition-delay: 4s;
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
  transition-delay: 4s;
}
.b2 {
  background-color: #fff;
  transform: scaleY(1);
  transform-origin: top;
  height: 100%;
  width: 100%;
  transition-delay: 4s;

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
