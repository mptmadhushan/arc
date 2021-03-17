<template>
  <div>
    <div style="margin-top: 10vh">
      <v-img
        contain
        height="80vh"
        src="../assets/Arienti/_SDS7737.jpeg"
      ></v-img>
      <p class="text001">
        Formerly in disrepair, unearthing hidden potential in what would be a
        City landmark
      </p>
    </div>
    <div style="margin-top: 10vh">
      <v-img height="82vh" src="../assets/Arienti/_SDS7732.jpeg"></v-img>
      <p class="text001">
        Eliminating high boundary walls to expose the exceptional facades
        beyond, now housing, one of Colombo's premier fashion brands.
      </p>
    </div>
    <div :class="!isMobile() ? 'container' : 'container_mob'">
      <div class="box">
        <div>
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :autoplay="true"
            :autoplay-timeout="3000"
            :display="3"
            :perspective="0"
          >
            <slide :index="0">
              <figure>
                <v-img src="../assets/Arienti/_SDS7808.jpeg" />
                <!-- <div
                  style="background-color: white;text-align: center;padding:20px;"
                >
                  Re-purposing and re-scaling of antique and contemporary
                  fittings to elevate the shopping experience
                </div> -->
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/Arienti/_SDS7783.jpeg" />
                <!-- <div
                  style="background-color: white;text-align: center;padding:20px;"
                >
                  Re-purposing and re-scaling of antique and contemporary
                  fittings to elevate the shopping experience
                </div> -->
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/Arienti/_SDS7782.jpeg" />
                <!-- <div
                  style="background-color: white;text-align: center;padding:20px;"
                >
                  Re-purposing and re-scaling of antique and contemporary
                  fittings to elevate the shopping experience
                </div> -->
              </figure>
            </slide>
            <slide :index="3">
              <figure>
                <v-img src="../assets/Arienti/_SDS7808.jpeg" />
                <!-- <div
                  style="background-color: white;text-align: center;padding:20px;"
                >
                  Re-purposing and re-scaling of antique and contemporary
                  fittings to elevate the shopping experience
                </div> -->
              </figure> </slide
            ><slide :index="4">
              <figure>
                <v-img src="../assets/Arienti/_SDS7783.jpeg" />
                <!-- <div
                  style="background-color: white;text-align: center;padding:20px;"
                >
                  Re-purposing and re-scaling of antique and contemporary
                  fittings to elevate the shopping experience
                </div> -->
              </figure> </slide
            ><slide :index="5">
              <figure>
                <v-img src="../assets/Arienti/_SDS7782.jpeg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="background-color: white;text-align: center;padding:20px;">
            Re-purposing and re-scaling of antique and contemporary fittings to
            elevate the shopping experience
          </div>
        </div>
      </div>
      <div class="box stack-top d-none d-lg-block">
        <div class="container_l">
          <div class="sub-left"></div>
        </div>
        <div class="container_l">
          <div class="sub-right"></div>
        </div>
      </div>
    </div>

    <div style="margin-top: 10%">
      <v-img
        style="margin-left: 10vw;margin-right: 10vw"
        height="82vh"
        src="../assets/Arienti/_SDS7793.jpeg"
      ></v-img>
      <p class="text001">
        Balancing reflections and artificial light.
      </p>
    </div>
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

<style>
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
  margin-top: 10px;
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
