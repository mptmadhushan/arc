<template>
  <div>
    <div
      data-aos-delay="100"
      data-aos-easing="linear"
      data-aos="fade-up"
      data-aos-duration="1500"
      class="d-flex justify-space-between"
      style="margin-top:1vh"
      id="0"
    >
      <router-link to="/projects">
        <img
          style="opacity: 0.5;margin-inline:20px"
          height="20vh"
          src="../assets/backArrow.png"
        />
      </router-link>
    </div>
    <div data-aos-delay="100" data-aos-duration="1500">
      <div class="b1con">
        <div class="b1"></div>
      </div>

      <p class="text001">
        Formerly in disrepair, unearthing hidden potential in what would be a
        City landmark
      </p>
      <div
        class="d-flex flex-column mb-6"
        style="margin-top:-3vh;margin-left:10vw"
      >
        <div>
          <v-icon size="30" href="#1" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-down-circle-outline</v-icon
          >
        </div>
      </div>
    </div>

    <div style="width:99vw;height:15vh;padding:10px"></div>

    <div id="1">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="linear"
        data-aos-duration="1500"
        style="height:100vh;width:100vw;"
        class="d-flex flex-column justify-space-between align-center"
      >
        <v-img
          eager
          contain
          height="85vh"
          src="../assets/Arienti/_SDS7732.jpeg"
        ></v-img>
        <p class="text001">
          Eliminating high boundary walls to expose the exceptional facades
          beyond, now housing one of Colombo's premier fashion brands.
        </p>
      </div>
      <div
        class="d-flex flex-column mb-6"
        style="margin-top:-10vh;margin-left:10vw"
      >
        <div>
          <v-icon size="30" href="#0" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-up-circle-outline</v-icon
          >
        </div>
        <div>
          <v-icon size="30" href="#2" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-down-circle-outline</v-icon
          >
        </div>
      </div>
    </div>

    <div style="width:99vw;height:15vh;padding:10px"></div>

    <div
      id="2"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        style="height:100vh;width:100vw;"
        class="d-flex flex-column justify-space-around align-center"
      >
        <carousel-3d
          :width="900"
          :height="600"
          :inverse-scaling="200"
          :space="1300"
          :autoplay="false"
          :autoplay-timeout="3000"
          :display="3"
          :perspective="0"
        >
          <slide :index="0">
            <figure>
              <v-img eager src="../assets/Arienti/_SDS7808.jpeg" />
            </figure> </slide
          ><slide :index="1">
            <figure>
              <v-img eager src="../assets/Arienti/_SDS7783.jpeg" />
            </figure> </slide
          ><slide :index="2">
            <figure>
              <v-img eager src="../assets/Arienti/_SDS7782.jpeg" />
            </figure>
          </slide>
          <slide :index="3">
            <figure>
              <v-img eager src="../assets/Arienti/_SDS7808.jpeg" />
            </figure> </slide
          ><slide :index="4">
            <figure>
              <v-img eager src="../assets/Arienti/_SDS7783.jpeg" />
            </figure> </slide
          ><slide :index="5">
            <figure>
              <v-img src="../assets/Arienti/_SDS7782.jpeg" />
            </figure>
          </slide>
        </carousel-3d>
        <div class="text001">
          Re-purposing and re-scaling of antique and contemporary fittings to
          elevate the shopping experience
        </div>
      </div>
      <div
        class="d-flex flex-column mb-6"
        style="margin-top:-10vh;margin-left:10vw"
      >
        <div>
          <v-icon size="30" href="#1" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-up-circle-outline</v-icon
          >
        </div>
        <div>
          <v-icon size="30" href="#3" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-down-circle-outline</v-icon
          >
        </div>
      </div>
    </div>

    <div style="width:99vw;height:15vh;padding:10px"></div>

    <div
      id="3"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div
        style="height:100vh;width:100vw;"
        class="d-flex flex-column justify-space-around align-center"
      >
        <div>
          <v-img
            height="85vh"
            contain
            eager
            src="../assets/Arienti/_SDS7793.jpeg"
          ></v-img>
        </div>
        <p class="text001">
          Balancing reflections and artificial light.
        </p>
      </div>
      <div
        class="d-flex flex-column mb-6"
        style="margin-top:-10vh;margin-left:10vw"
      >
        <div>
          <v-icon size="30" href="#2" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-up-circle-outline</v-icon
          >
        </div>
        <div>
          <v-icon size="30" href="#4" v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-down-circle-outline</v-icon
          >
        </div>
      </div>
    </div>
    <div style="width:99vw;height:15vh;padding:10px"></div>
  </div>
</template>

<script>
export default {
  computed: {},
  mounted() {
    console.log(this.is_mobile());
  },
  methods: {},
  data: () => ({
    settings: {
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    },
    slides: [
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=16p04rwVOo8E_jm26sxmYcBsGv4LWOxyb",
      },
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=1zwaXIdre34_s0dzbaLOdw5Icek-Emn7f",
      },
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=1pNjWuxQ3Tctwq6Vxtk-tOFPJm8PTVyS9",
      },
    ],
  }),
};
</script>

<style scoped>
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Arienti/_SDS7737.jpeg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 85vh;
}
.b1 {
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
.container {
  width: 100vw;
  height: 1000px;
  position: relative;
  margin: 0;
}
.container_mob {
  /* width: 100vw; */
  height: 100vw;
  position: relative;
  margin: 0;
}
.box {
  margin-top: 100px;
  width: 100vw;
  /* height: 900px; */
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8; /* for demo purpose  */
}
.stack-top {
  z-index: 9;
  margin: 0; /* for demo purpose  */
}
.carousel-3d-container figcaption[data-v-0251a268] {
  position: absolute;
  background-color: #ffff;
  color: #111;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
}
.text001 {
  text-align: center;
  padding: 20px;
  padding: 10px;
  margin-top: 1vh;
  font-size: 2vh;
  color: #11111193;
}
.slider-container {
  position: relative;
  text-align: center;
  padding: 20px;
  color: white;
}
.slider-text {
  background-color: rgba(0, 0, 0, 0.637);
  color: white;
  font-weight: bold;
  margin-top: 10px;
}
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
}
.center_text {
  line-height: 100vh;
  height: 100vh;
  text-align: center;
  padding: 20px;
}
.center_text p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: rgb(241, 233, 233);
  font-size: 10vh;
}
.overlay_text {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.6s linear;
  background-image: linear-gradient(to left, rgb(221, 30, 30), rgb(5, 81, 221));
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.overlay:hover .overlay_text {
  opacity: 0;
}
.sub-left {
  float: left;
  height: 900px;
  width: 7%;
  align-items: center;
  opacity: 1;
  transition: 0.6s ease;
  background-image: linear-gradient(to left, transparent, white);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 1300ms;
}
.sub-right {
  float: right;
  height: 900px;
  width: 7%;
  opacity: 1;
  transition: 0.6s ease;
  background-image: linear-gradient(to left, white, transparent);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.clear-both {
  clear: both;
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
  text-align: right;
}
.center_r p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: black;
}
.container_l:hover .sub-left {
  opacity: 1;
}
.bg:hover .bg2 {
  opacity: 1;
}
.container_l:hover .sub-right {
  opacity: 1;
}
.bg {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100vw;
  background-size: 100% 110%;
  height: 100vh;
  /* color: "red"; */
  background-image: url("../assets/new_main.jpg");
  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;
}
.change_color {
  background-image: linear-gradient(to left, white, black);
}
.change_color2 {
  background-image: linear-gradient(to left, rgb(138, 16, 16), black);
}
.bg2 {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.6s linear;
  background-image: linear-gradient(to left, white, black);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;
}
.hello {
  /* background-color: red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hello :hover {
  background-color: rgb(0, 4, 255);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
