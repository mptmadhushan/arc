<template>
  <div
    class="fadeClass"
    style="margin-top:25vh"
    data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-delay="400"
    data-aos-duration="3500"
  >
    <v-layout
      row
      wrap
      justify-space-around
      style="height:100vh"
      class="fadeClassHover"
    >
      <v-flex md4 sm12 xs12 align-self-center>
        <div class="image-box">
          <img src="../assets/12.png" alt="Unsplashed Randm" />
        </div>
        <!-- <v-img eager contain height="90vh" src="../assets/12.png"></v-img> -->
      </v-flex>
      <v-flex md6 sm12 xs12 align-self-center>
        <p class="pa-2 new">
          Chamika De Alwis began his architectural career at MICD Associates and
          continues to practice at the firm as a Senior Associate. In 2016 he
          embarked on his own practice as the Principal Architect of C Atelier
          Consultants and CDA Associates. He has worked on numerous
          architectural and restoration projects of which one was the recipient
          of the Conde Nast Johansens award for excellence in 2020 – 21. He has
          also been involved in several curatorial projects in Sri Lanka
          including the exhibitions Second Skin in March 2017 and Revive;
          Ethical Use of Material in June 2017 in collaboration with the Colombo
          Fashion Week. In 2019 he also curated One Won in collaboration with
          the University of the Visual and Performing Arts, Colombo in the
          aftermath of the Easter Attacks in Sri Lanka He is a Trustee of the
          Geoffrey Bawa Trust and the Lunuganga Trust.
        </p>
      </v-flex>
    </v-layout>
  </div>
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
.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
}
.image-box img {
  max-width: 100%;
  transition: all 3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1.1);
}

.fadeClass:hover img {
  transform: scale(1);
  transition: all 3s;
}

.fadeClassHover {
  opacity: 0;
  transition: all cubic-bezier(0.23, 1, 0.32, 1) ease-in;
}
.fadeClass:hover .fadeClassHover {
  opacity: 1;
  transition: all 1.5s ease-in;
}
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
.about_us_bg2:hover .ab1 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.5s ease-in;
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
